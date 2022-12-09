import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { sttApi } from '../api';
import { onLoadTrainers, onLogin } from '../store';

export const useTrainersStore = () => {

    const dispatch = useDispatch();
    const { trainers } = useSelector( state => state.trainers )
    const { user } = useSelector(state => state.auth);


    const startLoadingTrainers = async() => {
        try {
            const { data } = await sttApi.get('/clients/trainers');
            console.log(data.trainers)
            dispatch( onLoadTrainers(data.trainers) )
        } catch (error) {
            console.log(error)
        }
    }
    const updateTrainer = async(id, img, name) => {
        try {
            await sttApi.put(`/clients/trainer/${id}`)
            Swal.fire("Exitoso", 'Contratado con exito', "success");
            console.log(user)
            const data = { ...user, trainer: { img, name } }
            console.log({data})
            dispatch(onLogin(data))
        } catch (error) {
            console.error(error)
        }
    }

    return {
        //Propiedades
        trainers,

        //Metodos
        startLoadingTrainers,
        updateTrainer,
    }
}