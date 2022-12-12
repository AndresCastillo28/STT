const Trainer = require('../models/Trainer');

const getClients = async(req, res) => {
    const id = req.uid;
    const { clients } = await Trainer.findById(id).select('clients')
    return res.json({
        ok: true,
        msg: 'Clientes',
        clients
    })
}

module.exports = {
    getClients
}