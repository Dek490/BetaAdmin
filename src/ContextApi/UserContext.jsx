

import { createContext, useContext, useEffect, useState} from 'react';
import jscookie from 'js-cookie';
const UserContextApi = createContext();
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

export const UserContextProvider = ({children})=>{
const usenavigate = useNavigate()
    const [email,setEmail] = useState('')
    const [islogin,setIslogin] = useState(false)
    const LogOut = ()=>{
console.log("logout")

jscookie.remove('token')
setIslogin(false)
usenavigate("/")
    }

    useEffect(()=>{
        const token = jscookie.get('token')


        if(!token){
            usenavigate("/")
        }
        else{
    // console.log(jwtDecode(token))   
    const jwtdeconded = jwtDecode(token)
    setEmail(jwtdeconded.email)
    setIslogin(true)
}




    },[])

    return(
        <UserContextApi.Provider value={{email,LogOut,islogin,setIslogin}}>
            {children}
        </UserContextApi.Provider>
    )       
}

// use context function to use the context api
export const useUserContext = ()=>{
    return useContext(UserContextApi)
}