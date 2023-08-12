import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider, Breadcrumbs} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import ClientList from "./ClientList";
import { AddClient, DeleteClient, UpdateClient, getAllClient } from "./apiCrud";
import { useForm } from "react-hook-form";
import { AddCircleOutlineSharp, ErrorOutlineOutlined } from "@mui/icons-material";
import {  toast } from 'react-toastify';
 import { Link } from "react-router-dom";
import {
  useMutation,
    useQuery,
    useQueryClient
  } from '@tanstack/react-query'
import ConfirmDelete from "../deleteComponent/ConfirmDelete";
import {  useDeleteHook } from "../deleteComponent/deleteHooks";
import { AddQuery, DeleteQuery, GetQuery, UpdateQuery } from "../shared/reactquery";
export const Clients = ()=>{
    const queryclient = useQueryClient()
const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
const [clid,setclid]=useState('')
const [cldeleteid,setcldeleteid]=useState('')
    const [dailogOpen,setDailog]=useState(false)
    const ToggleDailog = ()=>{
        setDailog(!dailogOpen)
    }
 
 

const {data:client,isLoading,isError} = GetQuery("/client","client")

 

const {mutateAsync,isLoading:mutateLoading} = AddQuery("/client","client")

 

const {mutateAsync:updateMutate} = UpdateQuery("/client",clid,"client")

 
const AddNewClient = async (data)=>{

    if(clid !==''){

 try{
    // console.log(data)
//   update section
updateMutate(data).then(()=>{
    toast.success("Data has been Updated")
    ToggleDailog()
    reset()

})
// console.log("Data has been Updated")


    } catch( err){
console.log("error ayaa jira ",err)

    }
    }
    else {
        try{
            mutateAsync(data).then(()=>{
                toast.success("Data has been saved")
                ToggleDailog()
                reset()
            })
            // await AddClient(data)
        
     
              } catch( err){
          console.log("error ayaa jira ",err)
          
              }

    }
    

   
}





const UpdateClientInfo = async (data)=>{
// console.log("xogta la rabbo in la update gareeyo",data)
    setValue("ClientName",data.ClientName)
    setValue("Logo",data.Logo)
    setclid(data._id)
    ToggleDailog()

}


 
const {mutateAsync:deleteMutate} = DeleteQuery("/client","client")

const deletehook = useDeleteHook()

const deleteCheck = ()=>{

    // alert("deleted")
    deleteMutate(cldeleteid).then(()=>{
toast.success("data has been Deleted")
deletehook.Toggle()

    })
   
}
// cal delete fucntion
const deleteClientInfo = async (data)=>{
   deletehook.setMessage(data.ClientName)
    deletehook.Toggle()
    setcldeleteid(data._id)

    // console.log("Xogta la rabo in la delete gareyo",data._id   )





  

}

    return <>
   <Box  >

<ConfirmDelete open={deletehook.open} toggle={deletehook.Toggle} message={deletehook.message} confirm={deleteCheck} />

 {/* breadcrumbs */}

 <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="#">
    Dashboard {import.meta.env.VITE_APP_NAME}
  </Link>
 
  <Typography color="text.primary">Client</Typography>
</Breadcrumbs>


 {/* end */}
 <Divider sx={{height:10}}/>

    <Alert severity="info">Our Clients</Alert>
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={4}>
        <Typography variant="h6">List Clients</Typography>
  
        <IconButton   onClick={ToggleDailog}>
<AddCircleOutlineSharp />
        </IconButton>
    </Box>

    <Dialog open={dailogOpen} onClose={ToggleDailog}>
        <DialogTitle>New Client</DialogTitle>
        <Box component={"form"} onSubmit={handleSubmit(AddNewClient)}>
        <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>



<Stack  spacing={2} direction={'column'}>



<TextField label="Client Name" {...register("ClientName")} variant="outlined" size="small" fullWidth/>

<TextField label="Client logo" variant="outlined" {...register("Logo")} size="small" fullWidth/>
    
    
    </Stack>

    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={ToggleDailog}>Cancel</Button>
          <Button variant="contained" disabled={mutateLoading} sx={{bgcolor:"primary.main"}} type="submit"  size="small">

      {clid !=='' ? "Update" : "Submit"}
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>


{/* Delete conformation */}
<Divider/> dd
{/* {client} */}
 

{isError  ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>

<Box>

<ErrorOutlineOutlined sx={{fontSize:"58px" }} />
<Typography >Data noy found!</Typography>
    </Box>

</Box>): isLoading || !client   ? (<Box sx={{ display:'flex',justifyContent:'center',textAlign:'center',alignItems:"center",p:10}}>

<Box>

<CircularProgress sx={{fontSize:"58px" }} />
<Typography >Loading...</Typography>
    </Box>

</Box>) :  <ClientList deleteClient={deleteClientInfo} clientsData={client} update={UpdateClientInfo} />  }
 
    
   </Box>
    </>
}

 