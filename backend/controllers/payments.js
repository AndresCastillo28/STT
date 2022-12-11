const Stripe = require('stripe');

const stripe = new Stripe(process.env.SECRET_STRIPE)

const payment = async(req, res) => {

    try {
        
        const { id, amount } = req.body;
    
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "USD",
            description: "Mensualidad",
            payment_method: id,
            confirm: true
        }); 
    
        return res.json({
            ok: true,
            msg: 'Pago exitoso'
        })
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: error.raw.message
        })
    }

}

module.exports = {
    payment
}