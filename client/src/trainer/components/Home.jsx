import { Link } from "react-router-dom";
import trainer from  '../img/trainer2.jpg'
import doctor from '../img/doctor2.jpg'
import rutina from '../img/rutina2.png'

export const Home = () => {
    return (
        <div className='container  d-flex align-items-center mt-5'>
            <div className="row mx-5">
                <div className="col">
                    <div className="card border-danger bg-secondary" style={{ width: '25rem' }}>
                        <img src={ trainer } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center text-white fs-1">Mis clientes</h5>
                            <Link to="clientes" className="btn btn-danger d-flex justify-content-center fs-5">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card border-danger bg-secondary" style={{ width: '25rem' }}>
                        <img src={ doctor } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center text-white fs-1">Mi horario</h5>
                            <Link to="doctors" className="btn btn-danger d-flex justify-content-center">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
