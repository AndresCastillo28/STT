const { Schema, model } = require('mongoose');

const TrainerSchema = Schema({
    img: {
        type: String,
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    clients: {
        type: Object
    }

});

module.exports = model('Trainer', TrainerSchema);