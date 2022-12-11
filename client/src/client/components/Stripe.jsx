import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Swal from 'sweetalert2';
import { sttApi } from '../../api';


import { useState } from 'react';
import { useAuthStore } from '../../hooks';

const stripePromise = loadStripe('pk_test_51M9H0wCvsP8J1fmDbuhA9EX0I6pew2dbXuhho0a9kpksWaAi2bfcT5eySEX1XCsfvuBP6YpxFhRXYtrTnIhycuxU00ef2dY50h')

const CheckoutForm = () => {

    const { startUpdatePay } = useAuthStore()
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault();

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        });


        if (!error) {
            const { id } = paymentMethod

            try {
                const { data } = await sttApi.post('payments/month', {
                    id,
                    amount: 10000
                });

                console.log(data);
                elements.getElement(CardElement).clear();
                startUpdatePay()   
                // Swal.fire("Exitoso", data.msg, "success");
            } catch (error) {
                
                console.log(error);
            }
            setLoading(false)

        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="container text-dark">
                <h3 className='fs-1 text-danger'>Description</h3>
                <p className='fs-4 mt-4'>Mensualidad del gimnasio, precio: $100</p>
            </div>
            <CardElement className='form-control mt-4' />
            <div className="d-flex justify-content-center">

                <button className='btn btn-success btn-lg mt-4' disabled={!stripe}>
                    {loading ? (<div class="spinner-border text-light" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>) : ("Buy")}
                </button>
            </div>
        </form>
    )
}

export const Stripe = () => {
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-3" id="exampleModalLabel">Pago mensualiadad</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="container text-white">

                            <Elements stripe={stripePromise}>
                                <CheckoutForm />
                            </Elements>
                        </div>

                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
