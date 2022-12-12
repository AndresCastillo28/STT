// import { useDispatch, useSelector } from 'react-redux';
// import Swal from 'sweetalert2';

import { sttApi } from '../api';
// import { onLoadAppointments, onUpdateAppointment } from '../store';

export const useClientStore = () => {

    // const dispatch = useDispatch();
    // const { appointments } = useSelector( state => state.appointments )

    const startLoadingAClients = async() => {
        try {
            const { data } = await sttApi.get('/trainers/getclientes');
            console.log(data)
            // dispatch( onLoadAppointments(data.appointments) )
        } catch (error) {
            console.log(error)
        }
    }

    return {
        //Propiedades
        // appointments,

        //Metodos
        startLoadingAClients,
    }
}