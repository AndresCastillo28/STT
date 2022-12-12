import { Link } from 'react-router-dom'
import './css/navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg background-navbar fs-4 fw-bold p-4">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">
                    <h1>STT</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item me-3">
                            <Link to='/tutorial' className="nav-link active" aria-current="page" href="#">Tutorial</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active btn btn-danger" data-bs-toggle="modal" data-bs-target="#loginModal">Mi cuenta</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
