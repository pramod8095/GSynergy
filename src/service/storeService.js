import api from "./api";

const storeServiceProvider = async ()=>{

    try{
        const response = await api.get("/stores")
        return response.data;

    }catch(error){
        console.error(error)
    }
}

export default storeServiceProvider