import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    isLogin:false,
    chartData:""
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
        }

    }

})

export const { userLogged, chartData } = centeralDataSlice.actions;
export default centeralDataSlice.reducer;