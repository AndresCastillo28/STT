const { Schema, model } = require('mongoose');

const ClientSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastName: {
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
        ref: 'Trainer',
        default: null
    },
    rol: {
        type: String,
        default: 'client'
    },
    rutina: {
        type: Array
    }
});

module.exports = model('Client', ClientSchema);