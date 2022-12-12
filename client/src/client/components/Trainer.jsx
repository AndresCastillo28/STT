import React from 'react'
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../hooks';

export const Trainer = () => {

    const { user } = useAuthStore();
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
                    <Link to='/rutina'>
                        <button className='btn btn-danger fs-1 '> Ver mi rutina </button>
                    </Link >
                </div>
            </div>
        </div>
    )
}
