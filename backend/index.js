const express = require('express');
const cors = require('cors')
const { createRoles, createDates } = require('./helpers/initialSetup')
require('dotenv').config();

//Import CORS

const { dbConnection } = require('./database/config')

const app = express();

dbConnection();
createRoles();
createDates();


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'API running'
    })
})

//Rutas

app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/clients', require('./routes/client.routes'));
app.use('/api/payments', require('./routes/payments.routes'));


const PORT = 4000 || process.env.PORT

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
})