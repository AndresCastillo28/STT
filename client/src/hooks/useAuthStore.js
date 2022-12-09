import { useDispatch, useSelector } from 'react-redux';
import { sttApi } from '../api';
import { clearErrorMessage, onChecking, onLogoutAppointment, onLogin, onLogout } from '../store';

export const useAuthStore = () => {

    const { status, user, errorMessage } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async ({ email, password }) => {

        dispatch(onChecking());

        try {
            const { data } = await sttApi.post('/auth/login', { email, password });
            localStorage.setItem('token', data.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            dispatch(onLogin({ name: data.name, uid: data.uid, pago: data.pago, trainer: data.trainer, rol: data.rol }));
        } catch (error) {
            dispatch(onLogout('Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async () => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const { data } = await sttApi.get('auth/renew');
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());
            dispatch(onLogin({ name: data.name, uid: data.uid }));
        } catch (error) {
            console.log(error   )
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogoutAppointment());
        dispatch(onLogout());
    }

    return {
        //Propiedades
        errorMessage,
        status,
        user,

        //Funciones
        startLogin,
        checkAuthToken,
        startLogout,
    }
}