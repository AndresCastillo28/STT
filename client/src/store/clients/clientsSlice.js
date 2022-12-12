import { createSlice } from '@reduxjs/toolkit';

export const clientsSlice = createSlice({
    name: 'clients',
    initialState: {
        isLoadingClients: true,
        clients: [

        ],
    },
    reducers: {
        onLoadClients: (state, { payload = [] }) => {
            state.isLoadingClients = false;

            payload.forEach( client => {
                const exists = state.clients.some( dbClient => dbClient._id === client._id );
                if(!exists){
                    state.clients.push( client )
                }
            } )
        },
        onUpdateAppointment: (state, { payload } ) => {
            state.appointments = state.appointments.map( appointment =>  {
                if( appointment._id === payload._id ){
                    return payload
                }

                return appointment;
            })
        },
        onLogoutAppointment: ( state ) => {
            state.isLoadingAppointment = true,
            state.appointments      = []
        }
    }
});

export const {
    onLoadAppointments,
    onUpdateAppointment,
    onLogoutAppointment,

} = appointmentsSlice.actions;