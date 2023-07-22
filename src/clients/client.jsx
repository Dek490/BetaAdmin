import { Box,Stack,IconButton,Typography,Alert,TextField,Button} from "@mui/material"
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from "react";
export const Clients = ()=>{

    const [dailogOpen,setDailog]=useState(false)
    const ToggleDailog = ()=>{
        setDailog(!dailogOpen)
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
        <DialogContent>
        <Box sx={{width:"400px"}} mt={2}>



<Stack  spacing={2} direction={'column'}>



<TextField label="Client Name" variant="outlined" size="small" fullWidth/>

<TextField label="Client logo" variant="outlined" size="small" fullWidth/>
    
    
    </Stack>

    </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={ToggleDailog}>Cancel</Button>
          <Button variant="contained"   size="small">Submit</Button>
 
        </DialogActions>
      </Dialog>


    
   </Box>
    </>
}