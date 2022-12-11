const express = require('express')
const { registerUser, loginClient, revalidarToken } = require('../controllers/auth')
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { checkUser } = require('../middlewares/verify-user-exists');
const { validatJWT } = require('../middlewares/validate-jwt');

const router = express.Router();

router.post('/register', [
    check('name', 'El nombre es requerido').not().isEmpty(),
    check('lastName', 'El apellido es requerido').not().isEmpty(),
    check('cedula', 'Cedula invalida').toInt(),
    check('email', 'Ingrese un correo valido').isEmail(),
    check('password', 'Contraseña invalida').isLength({ min: 5 }),
    validateFields,
    checkUser
], registerUser)

router.post('/login', loginClient)
router.get('/renew', validatJWT ,revalidarToken)


module.exports = router;