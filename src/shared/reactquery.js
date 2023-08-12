import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddNew, Delete, Update, getAll } from "./api";
import {  toast } from 'react-toastify';



export const GetQuery = (endpoint,querykey)=>{

    return  useQuery({
        queryKey:[querykey],
        queryFn:()=>getAll(endpoint)
        
    })
}



export const AddQuery = (endpoint,querykey)=>{
const queryclient = useQueryClient()
    return useMutation({
        mutationFn:(data)=>AddNew(endpoint,data),
        onSuccess:()=>{
            queryclient.invalidateQueries({queryKey:[querykey]})
        },
        onError:(err)=>{
            console.log("Error",err)
            toast.error("Sorry Data has not ben saved")
        }


        
    })

}




export const UpdateQuery = (endpoint,id,querykey)=>{
    const queryclient = useQueryClient()
        return useMutation({
            mutationFn:(data)=>Update(endpoint,id,data),
            onSuccess:()=>{
                queryclient.invalidateQueries({queryKey:[querykey]})
            },
            onError:(err)=>{
                console.log("Error",err)
                toast.error("Sorry Data has not ben updated")
            }
    
    
            
        })
    
    }
    



    export const DeleteQuery = (endpoint,querykey)=>{
        const queryclient = useQueryClient()
            return useMutation({
                mutationFn:(id)=>Delete(endpoint,id),
                onSuccess:()=>{
                    queryclient.invalidateQueries({queryKey:[querykey]})
                },
                onError:(err)=>{
                    console.log("Error",err)
                    toast.error("Sorry Data has not ben Deleted")
                }
        
        
                
            })
        
        }
           
 