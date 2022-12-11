import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { sttApi } from '../api';
import { onLoadAppointments, onUpdateAppointment } from '../store';

export const useAppointmentStore = () => {

    const dispatch = useDispatch();
    const { appointments } = useSelector( state => state.appointments )

    const startLoadingAppointments = async() => {
        try {
            const { data } = await sttApi.get('/clients/dates');
            dispatch( onLoadAppointments(data.appointments) )
        } catch (error) {
            console.log(error)
        }
    }

    const startScheduleAppointment = async(_id) => {
        try {
            const { data } = await sttApi.put(`/clients/${_id}`);
            dispatch( onUpdateAppointment({ ...data.updatedAppointment }) )
            Swal.fire("Exitoso", 'Cita guardada', "success");
        } catch (error) {
           console.log(error) 
        }
    }

    return {
        //Propiedades
        appointments,

        //Metodos
        startLoadingAppointments,
        startScheduleAppointment
    }
}