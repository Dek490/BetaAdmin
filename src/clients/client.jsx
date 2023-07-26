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
import { AddClient, UpdateClient, getAllClient } from "./apiCrud";
import { useForm } from "react-hook-form";
import { AddCircleOutlineSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const Clients = ()=>{
const {register,handleSubmit,reset,setValue,formState:{errors}} = useForm()
const [clid,setclid]=useState('')
    const [dailogOpen,setDailog]=useState(false)
    const ToggleDailog = ()=>{
        setDailog(!dailogOpen)
    }

const [Clients,setClients] = useState([])
   
useEffect(()=>{
    const allClients =  async ()=>{
        
        const {data} = await  getAllClient()
    
        // console.log(data)

        setClients(data)
    }

    allClients()


},[])

 
const AddNewClient = async (data)=>{

    if(clid !==''){

 try{
  await UpdateClient(clid,data)
console.log("Data has been Updated")
ToggleDailog()
reset()
    } catch( err){
console.log("error ayaa jira ",err)

    }
    }
    else {
        try{
            await AddClient(data)
          console.log("Data has been saved")
          ToggleDailog()
          reset()
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


const deleteClientInfo = async (data)=>{

    console.log("Xogta la rabo in la delete gareyo",data
    )



}
    return <>
   <Box p={4}>


 {/* breadcrumbs */}

 <Breadcrumbs aria-label="breadcrumb">
  <Link underline="hover" color="inherit" href="#">
    Dashboard
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
          <Button variant="contained" sx={{bgcolor:"primary.main"}} type="submit"  size="small">

      {clid !=='' ? "Update" : "Submit"}
          </Button>
 
        </DialogActions>

        </Box>
      </Dialog>


{/* Delete conformation */}
<Divider/>
 {Clients ? <ClientList deleteClient={deleteClientInfo} clientsData={Clients} update={UpdateClientInfo} /> : null }
    
   </Box>
    </>
}