import { createSlice } from '@reduxjs/toolkit';

export const appointmentsSlice = createSlice({
    name: 'appointments',
    initialState: {
        isLoadingAppointment: true,
        appointments: [

        ],
    },
    reducers: {
        onLoadAppointments: (state, { payload = [] }) => {
            state.isLoadingAppointment = false;

            payload.forEach( appointment => {
                const exists = state.appointments.some( dbAppointment => dbAppointment._id === appointment._id );
                if(!exists){
                    state.appointments.push( appointment )
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