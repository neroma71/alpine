import { configureStore } from '@reduxjs/toolkit';
import { carReducer } from '../features/car/Car';

export const store = configureStore({
    reducer: {
        alpine: carReducer
    },
});
