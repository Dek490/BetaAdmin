import { apiConfig } from "../../apiConfig/Config"


export const getAll  =   (endpoint)=>{

    return   apiConfig.get(endpoint).then((res)=>res.data)
}


 
export const getById  =   (endpoint,id)=>{

    return   apiConfig.get(`${endpoint}/${id}`).then((res)=>res.data)
}



 
export const AddNew  =   (endpoint,data)=>{

    return   apiConfig.post(endpoint,data).then((res)=>res.data)
}




export const Update  = async (endpoint,id,data)=>{

    return   apiConfig.put(`${endpoint}/${id}`,data).then((res)=>res.data)
}


export const Delete  = async (endpoint,id)=>{

    return   apiConfig.delete(`${endpoint}/${id}`).then((res)=>res.data)
}



