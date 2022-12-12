const { Schema, model } = require('mongoose');

const TrainerSchema = Schema({
    img: {
        type: String,
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    clients: {
        type: Array
    },
    rol: {
        type: String
    }

});

module.exports = model('Trainer', TrainerSchema);