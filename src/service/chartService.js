import api from "./api";


export const getChartData = async () =>{
    try{
        const response = await api.get("/forCharts")
        return response.data;
    }catch(error){
        console.error(error);
        throw error;
    }
}