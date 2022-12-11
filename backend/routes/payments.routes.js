const express = require('express');
const { payment } = require('../controllers/payments');
const { validatJWT } = require('../middlewares/validate-jwt');

const router = express.Router();

router.use(validatJWT)

router.post('/month', payment)



module.exports = router;