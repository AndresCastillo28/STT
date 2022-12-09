const Client = require('../models/Client');

const checkUser = async(req, res, next) => {
    try {
        const user = await Client.findOne({ email: req.body.email });
        if( user ) return res.status(400).json({ msg: 'El usuario ya existe' });

        const cedula = await Client.findOne({ cedula: req.body.cedula });
        if( cedula ) return res.status(400).json({ msg: 'Ya existe un usuario con esa cedula' });

        next();

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

module.exports = {
    checkUser
}