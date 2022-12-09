import { useEffect } from 'react'
import Swal from 'sweetalert2';
import { GrClose } from "react-icons/gr";
import { useAuthStore, useForm } from '../hooks';

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const Login = () => {
   
  const { startLogin, errorMessage } = useAuthStore()

  const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields)

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({ email: loginEmail, password: loginPassword });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);
  
  return (
    <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h1 className="modal-title fs-3" id="exampleModalLabel">Iniciar Sesion</h1>
            <button type="button" className="btn btn-danger text-white" data-bs-dismiss="modal" aria-label="Close">
              <GrClose className='text-white'/>
            </button>
          </div>
          <div className="modal-body px-5">
            <div className="row">
              <div className="col">
                <form onSubmit={ loginSubmit }>
                <div className="row">
                  <label htmlFor='email' className="col-sm-2 col-form-label fs-4">Email</label>
                  <input type="email" className='form-control form-control-lg' id='email' name='loginEmail' value={ loginEmail } onChange={ onLoginInputChange } />
                </div>
                <div className="row mt-1">
                  <label htmlFor='password' className="col-sm-2 col-form-label fs-4">Password</label>
                  <input type="password" className='form-control form-control-lg' id='password' name='loginPassword' value={ loginPassword } onChange={ onLoginInputChange }/>
                </div>
                <div className="row mt-4">
                  <button className='btn btn-danger fs-4' data-bs-dismiss="modal">Ingresar</button>
                </div>
                </form>
                <div className="row mt-2">
                  <div className="col-6">
                  <button className='btn btn-danger'>Registarme</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
