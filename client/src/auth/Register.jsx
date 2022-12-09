import React from 'react'
import { useAuthStore, useForm } from '../hooks'

const registerFormFields = {
  registerName: '',
  registerLastName: '',
  registerEmail: '',
  registerCedula: '',
  registerPassword: ''
}

export const Register = () => {

  const { startRegister, errorMessage } = useAuthStore()

  const { registerName, registerLastName, registerEmail, registerCedula, registerPassword, onInputChange: onRegisterInputChange } = useForm(registerFormFields)

  const registerSubmit = (event) => {
    event.preventDefault();
    startRegister({ name: registerName, email: registerEmail, password: registerPassword });
  };
  useEffect(() => {
    if (errorMessage !== undefined) {
      Swal.fire("Error en la autenticación", errorMessage, "error");
    }
  }, [errorMessage]);

  return (
    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModal" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-1 fw-bold" id="registerModal">Registro de usuario</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div className="container">
              <div className="row">
                <form onSubmit={ registerSubmit }>
                <div className="col-6">
                  <label htmlFor='nombre' className="fs-4">Nombre</label>
                  <input type="text" id='nombre' className='form-control' name='registerName' value={ registerName } onChange={ onRegisterInputChange } />
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor='apellido' className="fs-4">Apellido</label>
                  <input type="text" id='apellido' className='form-control' name='registerLastName' value={ registerLastName } onChange={ onRegisterInputChange }/>
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor='email' className="fs-4">Email</label>
                  <input type="text" id='email' className='form-control' name='registerEmail' value={ registerEmail } onChange={ onRegisterInputChange }/>
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor='cedula' className="fs-4" name='registerCedula' value={ registerCedula } onChange={ onRegisterInputChange } >Cedula</label>
                  <input type="text" id='cedula' className='form-control' />
                </div>
                <div className="col-12 mt-2">
                  <label htmlFor='password' className="fs-4" name='registerPassword' value={ registerPassword } onChange={ onInputChange }>Contraseña</label>
                  <input type="text" id='password' className='form-control' />
                </div>
                <div className="col-12 btn btn-danger mt-4 fs-4">
                  <div className="col">
                    Registrarme
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
