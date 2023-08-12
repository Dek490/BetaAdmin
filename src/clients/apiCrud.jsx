import { apiConfig } from "../../apiConfig/Config"

/*
all shaqooyin client api 

post
update
delete
get
get by id

*/

export const getAllClient = async()=>{

    return await apiConfig.get("/client")
}

export const GetByIdClient = async (id)=>{
    return await apiConfig.get(`/client/${id}`)
}

export const  AddClient = async (data)=>{
    return await apiConfig.post("/client",data)
}

export const  DeleteClient = async (id)=>{
    return await apiConfig.delete(`/client/${id}`)
}

export const  UpdateClient = async (id,data)=>{
    return await apiConfig.put(`/client/${id}`,data)
}
