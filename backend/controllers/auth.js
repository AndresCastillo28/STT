const bcrypt = require('bcryptjs')
const Client = require('../models/Client');
const Role = require('../models/Role');
const { encryptPassword } = require('../helpers/encryptPassword');
const { generateJWT } = require('../helpers/jwt');
const Trainer = require('../models/Trainer');



const registerUser =  async(req, res) => {
    
    try {
        let { password } = req.body;
        password =  encryptPassword(password)

        const data = {
            ...req.body,
            password
        }

        const user = new Client(data);

        await user.save();

        const token = await generateJWT(user._id, user.name);

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            token,
            msg: 'Usuario creado'
        })

    } catch (error) {
        console.error(error)
    }
}

const loginClient = async( req, res ) => {
    const { email, password } = req.body;

    const user = await Client.findOne({email});
    try {
      
        console.log(user)
        if( !user ) {
            const trainer = await Trainer.findOne({ email });

            const validPassword =  bcrypt.compareSync( password, trainer.password );

            if ( !validPassword ) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Contraseña incorrecta'
                })
            }

            const token = await generateJWT(trainer._id, trainer.name);

            return res.json({
                ok: true,
                msg: 'Usuario logueado',
                uid: trainer._id,
                name: trainer.name,
                rol: trainer.rol,
                token
            })
        }

        const validPassword =  bcrypt.compareSync( password, user.password );

        if ( !validPassword ) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña incorrecta'
            })
        }
        const token = await generateJWT(user._id, user.name);

        const trainer = await Trainer.findById(user.trainer).select('-clients')
        console.log(trainer)

        return res.json({
            ok: true,
            msg: 'Usuario logueado',
            uid: user._id,
            name: user.name,
            pago: user.pago,
            rol: user.rol,
            trainer,
            token
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({
            ok: false,
            msg: 'Please talk to the administrator'
        })
    }
} 

const revalidarToken = async (req, res = response) => {

    try {
        const { uid, name } = req;
    
        // generar un nuevo JWT y retornarlo en esta petición
        const token = await generateJWT( uid, name );
    
        return res.json({
            ok: true,
            token
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            ok: false,
            mgs: 'Por favor hable con el administrador'
        })
    }

};

module.exports = {
    registerUser,
    loginClient,
    revalidarToken
}