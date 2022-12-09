const { Schema, model } = require('mongoose');

const AppointmentSchema = Schema({
    time: String,
    available: {
        type: Boolean,
        default: true
    },
    doctor: String,
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        default: null
    },
    date: {
        type: String
    }
    
});

module.exports = model('Appointment', AppointmentSchema);