import { Box, Button, Stack, TextField,Alert } from '@mui/material'
import React, { useEffect } from 'react'
import './login.css'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import jscookie from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useUserContext } from '../ContextApi/UserContext'
export default function Login() {
    const usenav = useNavigate()
    useEffect(()=>{
        if(jscookie.get('token')){
            usenav('/dashboard')
        }
    },[])
    const {register,handleSubmit,reset,formState:{errors}} = useForm()

 const {setIslogin} = useUserContext()
    const {mutateAsync,isError,isLoading,error,data:response} = useMutation({
        mutationFn: async (data)=>{
           return await axios.post('https://betahousebackendapi.vercel.app/login',data)
        },
        onError:(er)=>{
            console.log("er",er)
        }
    })
    const login = async (data) => {

 

        mutateAsync(data).then((res)=>{

            jscookie.set('token',res.data.AccessToken)

            if(res.status === 200){
setIslogin(true)
               usenav('/dashboard')
            }
            // console.log("login accepted",res.data.AccessToken)

        })



    }


  return (
  <div className='login'>



  
  <Box sx={{}}>
<Box component='form' onSubmit={handleSubmit(login)} boxShadow={2} sx={{width:"450px",backgroundColor:"white",p:6,mx:'auto',borderRadius:4,
mt:10}}>

<Stack spacing={2}>
{isError &&  <Alert severity="error">Incorrect Email Or Password</Alert>}

    <TextField   {...register("email")}  size='small' label="Email" variant="outlined" />
    <TextField  {...register("password")} size='small' label="Password" variant="outlined" />

    <Button type='submit' variant="contained" size='small' disabled={isLoading}>Login</Button>
</Stack>

</Box>


    </Box>


    </div>
 
  )
}
