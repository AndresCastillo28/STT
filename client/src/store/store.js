import { configureStore } from '@reduxjs/toolkit';
import { authSlice, appointmentsSlice, trainersSlice } from './';

export const store = configureStore({
    reducer: {
        auth:     authSlice.reducer,
        trainers: trainersSlice.reducer,
        appointments: appointmentsSlice.reducer,
        // payments: paymentsSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})