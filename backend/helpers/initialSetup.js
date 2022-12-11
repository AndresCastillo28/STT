const mongoose = require('mongoose');
const Role = require('../models/Role');
const Appointment = require('../models/Appointment')

const createRoles = async () => {
    try {
        const count = await Role.estimatedDocumentCount()

        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'client' }).save(),
            new Role({ name: 'trainer' }).save(),
            new Role({ name: 'doctor' }).save()
        ]);

        console.log(values)

    } catch (error) {
        console.error(error);
    }
}

const createDates = async() => {
    let date = new Date()
    date.toISOString().split('T')[0];

    const offset = date.getTimezoneOffset()
    date = new Date(date.getTime() - (offset * 60 * 1000))
    date = date.toISOString().split('T')[0]

    const findDate = await Appointment.findOne({ date })

    if(findDate) {
        return
    } else {
        const timeTable =  [
            {
                time: '8:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '9:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '10:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '11:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '2:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '3:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '4:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '5:30',
                doctor: 'Oscar',
                date
            },
            {   
                time: '6:30',
                doctor: 'Oscar',
                date
            },

        ]

        timeTable.forEach((appointment) => {
            const newData =  new Appointment(appointment)
            newData.save();
        })
        
    }
}

module.exports = {
    createRoles,
    createDates
}