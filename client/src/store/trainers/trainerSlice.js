import { createSlice } from '@reduxjs/toolkit';

export const trainersSlice = createSlice({
    name: 'trainers',
    initialState: {
        isLoadingTrainers: true,
        trainers: [

        ],
    },
    reducers: {
        onLoadTrainers: (state, { payload = [] }) => {
            state.isLoadingTrainers = false;

            payload.forEach( trainer => {
                const exists = state.trainers.some( dbTrainer => dbTrainer._id === trainer._id);
                if(!exists){
                    state.trainers.push( trainer )
                }
            } )
        },
        onLogoutTrainers: ( state ) => {
            state.isLoadingTrainers = true,
            state.trainers      = []
        }
    }
});

export const {
    onLoadTrainers,
    onLogoutTrainers
} = trainersSlice.actions

