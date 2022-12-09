import { Link } from "react-router-dom";

import { useAuthStore } from "../../hooks";
import {AiOutlineLogin} from 'react-icons/ai';


export const Navbar = () => {

    const { startLogout, user } = useAuthStore();
    
  return (
    <nav className="navbar navbar-dark navbar-expand-lg background-navbar fs-4 fw-bold p-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h1>Bienvenido a STT { user.name } </h1>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item me-3">
                            <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link active" href="#">Link</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link active btn btn-secondary" data-bs-toggle="modal" data-bs-target="#loginModal">Mi perfil</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active btn btn-danger" onClick={ startLogout } data-bs-toggle="modal" data-bs-target="#loginModal">Salir <AiOutlineLogin/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}
