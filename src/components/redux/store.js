import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        poopairy: counterSlice.reducer,
    },
});