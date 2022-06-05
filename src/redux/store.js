import { configureStore } from "@reduxjs/toolkit";
import documentReducer from './documentSlice';

const store = configureStore({
    reducer: {
        document: documentReducer,
    },
});

export default store;