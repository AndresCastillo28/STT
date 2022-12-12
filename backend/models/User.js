const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true
    },
    cedula: {
        type: Number,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    pago: {
        type: Boolean,
        default: false
    },
    trainer: {
        type: Schema.Types.ObjectId,
        ref: 'Trainer'
    },
    rol: {
        type: String,
        default: 'client'
    },
    clients: {
        type: Array
    }
});

module.exports = model('Client', ClientSchema);