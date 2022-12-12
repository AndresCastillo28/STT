const express = require('express');
const { getClients } = require('../controllers/trainers');
const { validatJWT } = require('../middlewares/validate-jwt');

const router = express.Router();

router.use(validatJWT)

router.get('/getclientes', getClients)



module.exports = router;