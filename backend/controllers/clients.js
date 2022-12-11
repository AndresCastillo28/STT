const Appointment = require('../models/Appointment');
const Client = require('../models/Client');
const Trainer = require('../models/Trainer');

const getScheduleDate = async (req, res) => {

    try {
        let date = new Date()
        date.toISOString().split('T')[0];

        const offset = date.getTimezoneOffset()
        date = new Date(date.getTime() - (offset * 60 * 1000))
        date = date.toISOString().split('T')[0]

        const appointments = await Appointment.find({ date: date })

        return res.json({
            ok: true,
            appointments
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

}

const getTrainers = async (req, res) => {
    const trainers = await Trainer.find()
    try {
        return res.json({
            ok: true,
            trainers
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }
}

const updateAppointment = async (req, res) => {
    const appointmentId = req.params.id;

    try {
        const cliente = req.uid
        const available = false
        const data = {
            cliente,
            available
        }

        const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, data, { new: true })

        return res.json({
            ok: true,
            msg: 'Cita guardada',
            updatedAppointment
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const getTrainer = async(req, res) => {
    try {
        const id = req.uid
        const { trainer } = await Client.findById(id, 'trainer');
        const foundTrainer = await Trainer.findById(trainer).select('-clients');
        
        return res.json({
            ok: true,
            msg: 'Entrenador del usuario',
            foundTrainer
        })
        
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const updateTrainer = async (req, res) => {

    try {
        const trainer = req.params.id
        const user = req.uid
        const clientId = await Client.findById(user)

        const clients = [{
            client: {
                user: clientId._id,
                name: clientId.name
            }
        }]

        const data = {
            clients
        }
        const data2 = {
            trainer
        }

        const update = await Trainer.findByIdAndUpdate(trainer, data, { new: true });
        const updateClientProfile = await Client.findByIdAndUpdate(user, data2, { new: true } )

        return res.json({
            update,
            updateClientProfile
        })

    } catch (error) {
        console.log(error)
    }
}

const updatePay = async (req, res) => {
    try {
        const user = req.uid

        const pay = {
            pago: true
        }

        await Client.findByIdAndUpdate(user, pay, { new: true } )

        return res.json({
            ok: true,
            msg: 'Pago registrado'
        })

    } catch (error) {
        console.log(error)
    }
} 

module.exports = {
    getScheduleDate,
    getTrainers,
    updateAppointment,
    updateTrainer,
    getTrainer,
    updatePay
}