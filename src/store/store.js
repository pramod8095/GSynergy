import { configureStore } from "@reduxjs/toolkit";
import  centeralDataSlice  from "./centeralDataSlice";


export const store = configureStore({
    reducer:{
        optimus:centeralDataSlice
    }
})
