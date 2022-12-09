const mongoose = require('mongoose');   

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('Database is connected')
    } catch (error) {
        throw new Error('Database connection failed')
    }
}

module.exports = {
    dbConnection
}