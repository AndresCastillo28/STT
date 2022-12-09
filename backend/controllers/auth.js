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

        const client = new Client(data);

        await client.save();

        return res.status(201).json({
            ok: true,
            client,
            msg: 'Usuario creado'
        })

    } catch (error) {
        console.error(error)
    }
}

const loginClient = async( req, res ) => {
    const { email, password } = req.body;

    try {
        const user = await Client.findOne({email});

        if( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'El usuario no existe'
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

    const { uid, name } = req;

    // generar un nuevo JWT y retornarlo en esta petición
    const token = await generarJWT( uid, name );

    res.json({
        ok: true,
        token
    })
};

module.exports = {
    registerUser,
    loginClient,
    revalidarToken
}