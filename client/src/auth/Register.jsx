import React, { useEffect } from 'react'
import { useAuthStore, useForm } from '../hooks'
import Swal from 'sweetalert2';

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
    startRegister({ name: registerName, lastName: registerLastName, cedula: registerCedula, email: registerEmail, password: registerPassword });
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
              <form onSubmit={ registerSubmit }>
              <div className="row">
        
                <div className="col-6">
                  <label htmlFor='registerNombre' className="fs-4">Nombre</label>
                  <input type="text" id='registerNombre' className='form-control' name='registerName' value={ registerName } onChange={ onRegisterInputChange } />
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor='registerApellido' className="fs-4">Apellido</label>
                  <input type="text" id='registerApellido' className='form-control' name='registerLastName' value={ registerLastName } onChange={ onRegisterInputChange }/>
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor='registerCorreo' className="fs-4">Email</label>
                  <input type="text" id='registerCorreo' className='form-control' name='registerEmail' value={ registerEmail } onChange={ onRegisterInputChange }/>
                </div>
                <div className="col-6 mt-2">
                  <label htmlFor='registerId' className="fs-4" >Cedula</label>
                  <input type="number" id='registerId' className='form-control' name='registerCedula' value={ registerCedula } onChange={ onRegisterInputChange } />
                </div>
                <div className="col-12 mt-2">
                  <label htmlFor='registerContrasena' className="fs-4" >Contraseña</label>
                  <input type="password" id='registerContrasena' className='form-control' name='registerPassword' value={ registerPassword } onChange={ onRegisterInputChange }/>
                </div>
                
              </div>
                <div className="row mt-4">
                    <button className='btn btn-danger' data-bs-dismiss="modal">Registrarme</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
