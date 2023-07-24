import { Box,Stack,IconButton,Typography,Alert,TextField,Button, Divider} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from "react";
import ClientList from "./ClientList";
import { AddClient, getAllClient } from "./apiCrud";
import { useForm } from "react-hook-form";
export const Clients = ()=>{
const {register,handleSubmit,reset,formState:{errors}} = useForm()
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
    try{
  await AddClient(data)
console.log("Data has been saved")
ToggleDailog()
    } catch( err){
console.log("error ayaa jira ",err)

    }
}
    return <>
   <Box p={4}>

    <Alert severity="info">Our Clients</Alert>
    <Box sx={{display:"flex",justifyContent:"space-between"}} my={4}>
        <Typography variant="h6">List Clients</Typography>
  
        <IconButton onClick={ToggleDailog}>
<AddHomeWorkIcon sx={{color:"green"}}/>
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
          <Button variant="contained" type="submit"  size="small">Submit</Button>
 
        </DialogActions>

        </Box>
      </Dialog>

<Divider/>
 {Clients ? <ClientList clientsData={Clients}/> : null }
    
   </Box>
    </>
}