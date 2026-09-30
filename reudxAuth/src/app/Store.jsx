import { configureStore } from "@reduxjs/toolkit";
import counterSlice  from "../features/counterSlice/CounterSlice";
import authSlice from '../features/authSlice/authSlice.jsx'
export const store = configureStore({
    reducer:{
        counter:counterSlice,
        auth:authSlice
    }
})