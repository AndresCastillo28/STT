const express = require('express');
const { getScheduleDate, getTrainers, updateAppointment, updateTrainer, getTrainer, updatePay } = require('../controllers/clients');
const { validatJWT } = require('../middlewares/validate-jwt');

const router = express.Router();

router.use(validatJWT)

router.get('/dates', getScheduleDate)
router.get('/trainers', getTrainers)
router.get('/trainer', getTrainer)
router.put('/:id', updateAppointment)
router.put('/trainer/:id', updateTrainer)
router.post('/pay', updatePay)


module.exports = router;