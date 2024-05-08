import { configureStore } from "@reduxjs/toolkit";
import webDataReducer from './webDetailsSlicer';

const store = configureStore({
    reducer: {
        webData: webDataReducer
    }
})

export default store;