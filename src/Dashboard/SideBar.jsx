
import { Box ,Stack,Typography,Drawer} from "@mui/material"
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import { useState } from "react";

// import StarBorder from '@mui/icons-material/StarBorder';



export const Sidebar = ({DrawerOpen,DrawerClose})=>{

 
     
    return<>
<Drawer
open={DrawerOpen}
onClose={DrawerClose}
>
<Box sx={{width:"300px"}}> 
  

<Box sx={{p:4}}>

<Stack direction={'row'} spacing={1}>
<Box>
<AddHomeWorkIcon sx={{color:"green",height:30, fontSize:50 }} />

</Box>

<Box><Typography variant="h6" > BetaHouse</Typography></Box>
</Stack>
</Box>
    
    


    {/* Menu list */}
    

   <Box>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
 
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Guryaha" />
        
      </ListItemButton>
     


      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Images" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
        
      </ListItemButton>

    </List>
    </Box> 
    </Box>
</Drawer>
{/* big screen menu */}
    <Box sx={{width:"300px",height:"100vh",display:{
        xs:"none",
       
        md:"block"
    },borderRight:1,borderColor:"#eee"}}> 
  

<Box sx={{p:4}}>

<Stack direction={'row'} spacing={1}>
<Box>
<AddHomeWorkIcon sx={{color:"green",height:30, fontSize:50 }} />

</Box>

<Box><Typography variant="h6" > BetaHouse</Typography></Box>
</Stack>
</Box>
    
    


    {/* Menu list */}
    

   <Box>
   <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
 
    >
      <ListItemButton>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Guryaha" />
        
      </ListItemButton>
     


      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Images" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Services" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Clients" />
        
      </ListItemButton>

      <ListItemButton >
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Contacts" />
        
      </ListItemButton>

    </List>
    </Box> 
    </Box>
    </>
}