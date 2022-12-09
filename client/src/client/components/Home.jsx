import { Link } from "react-router-dom";
import './css/nopago.css'
import trainer from  '../img/trainer2.jpg'
import doctor from '../img/doctor2.jpg'
import rutina from '../img/rutina2.png'

export const Home = () => {
    return (
        <div className='container-fluid  d-flex align-items-center nopago'>
            <div className="row mx-5">
                <div className="col">
                    <div className="card border-danger bg-secondary" >
                        <img src={ trainer } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center text-white fs-1">Entrenador</h5>
                            <Link to="trainers" className="btn btn-danger d-flex justify-content-center fs-5">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card border-danger bg-secondary" >
                        <img src={ doctor } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center text-white fs-1">Doctor</h5>
                            <Link to="doctors" className="btn btn-danger d-flex justify-content-center">Go somewhere</Link>
                        </div>
                    </div>
                </div>
                <div className="col">
                <div className="card bg-secondary border-danger" >
                        <img src={ rutina } className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title text-center fs-1 text-white">Rutina</h5>
                            <a href="#" className="btn btn-danger d-flex justify-content-center">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
