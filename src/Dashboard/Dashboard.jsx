import { Box,Stack,IconButton,Typography } from "@mui/material"
import { Sidebar } from "./SideBar"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Clients } from "../clients/client";
export const Dashboard = () => {
const [draweOpen,setDrawer]=useState(false)

const ToggleDrawer = ()=>{
setDrawer(!draweOpen)
}
    return <>
      <Box>

<Stack direction={'row'}>

<Sidebar DrawerOpen={draweOpen} DrawerClose={ToggleDrawer}/>
{/* content box */}
<Box sx={{width:"100%"}}>
{/* top header */}

<Box sx={{backgroundColor:"green",color:"white",display:"flex",justifyContent:{
    xs:"space-between",
    md:"end"
}}} p={2}>
    
<IconButton sx={{p:0,display:{
    xs:"block",
    md:"none"
}}} onClick={()=>ToggleDrawer()}>
    <MenuIcon sx={{color:"white"}}/>
</IconButton>

<Typography > User : Keynaan@gmail.com</Typography>
</Box>

{/* top header end */}

{/* content pages */}
<Clients/>

{/* end content */}


 
</Box>
</Stack>
      </Box>

    </>
}