import { Stripe } from '../';
import './css/nopago.css'

export const NoPayments = () => {
    return (
        <>
            
                <div className='d-flex justify-content-center align-items-center nopago'>
                    <h2 className='text-white me-4 fs-1'>No tienes pago registrado</h2> <br />
                    <Stripe />
                    <button className='btn btn-danger fs-1 p-3 border'  data-bs-toggle="modal" data-bs-target="#exampleModal">Click aquí para registrar pago</button>
                </div>
            

        </>
    )
}
