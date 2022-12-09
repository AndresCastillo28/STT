import React from 'react'
import { useAuthStore } from '../../hooks';

export const Trainer = () => {

    const { user } = useAuthStore();
    console.log(user.trainer)
    const { trainer } = user

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div class="card" style={{ width: '18rem;' }}>
                        <img src={trainer.img} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title text-center fs-1">Yo soy tu entrenador</h5>
                            <p class="card-text text-center fs-2">{ trainer.name }</p>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center">
                    <button className='btn btn-danger fs-1 fw-bold p-5 border-5'>Ver mi rutina</button>
                </div>
            </div>
        </div>
    )
}
