import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isLogin:false,
    chartData:"",
    storeData:""
}


export const centeralDataSlice = createSlice({
    name:"data",
    initialState:initialState,
    reducers:{
        userLogged: (state)=>{
            state.isLogin = !state.isLogin
        },

        chartData: (state, action)=>{
            state.chartData =  action.payload
        },
        storeData : (state, action)=>{
            state.storeData = action.payload
        },
        deteteStoreData : (state, action)=>{
            const newStoreData = state.storeData.filter((data)=>data.id !== action.payload);
            state.storeData = newStoreData;
        },
        addStoreData: (state, action)=>{
            state.storeData = [...state.storeData, action.payload]
        }

    }

})

export const { userLogged, chartData, storeData, deteteStoreData,addStoreData } = centeralDataSlice.actions;
export default centeralDataSlice.reducer;