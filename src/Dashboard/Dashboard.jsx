import { Box,Stack,IconButton,Typography } from "@mui/material"
import { Sidebar } from "./SideBar"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Clients } from "../clients/client";
import { Outlet } from "react-router-dom";
import { useUserContext } from "../ContextApi/UserContext";
import { LoginOutlined } from "@mui/icons-material";
 
export const Dashboard = () => {
const [draweOpen,setDrawer]=useState(false)
const  {email,LogOut} = useUserContext()
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

<Box sx={{bgcolor:"primary.main",color:"white",display:"flex",justifyContent:{
    xs:"space-between",
    md:"end"
}}} p={2}>
    
<IconButton sx={{p:0,display:{
    xs:"block",
    md:"none"
}}} onClick={()=>ToggleDrawer()}>
    <MenuIcon sx={{color:"white"}}/>
</IconButton>

<Stack direction={'row'} spacing={2}>

<Typography > User :{email} </Typography>
<IconButton sx={{p:0}}  onClick={()=>LogOut()}>
    <LoginOutlined sx={{color:"white"}}/>
</IconButton>
</Stack>
</Box>

{/* top header end */}

{/* content pages */}


{/* <Clients/> */}
<Box p={3}>
    
<Outlet/>
    </Box>
 
{/* end content */}


 
</Box>
</Stack>
      </Box>

    </>
}