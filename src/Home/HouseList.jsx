import { Avatar, Box,Chip,Divider,IconButton, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import BorderColorIcon from '@mui/icons-material/BorderColor';

 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';


export default function HouseList({HousesData,update,deleteHouse}) {
const [dailOpen,setDail] = useState(false)
const[XogtaGuriga,setXogta]=useState()
  // console.log(HousesData)
const Toggle = ()=>{
  setDail(!dailOpen)
}
  const seeMore = (data)=>{

    console.log(data)
    setXogta(data)
    Toggle()

 

  }

    const columns = [
        // { field: '_id', headerName: 'ID', width: 90 },

        {
field:"image",
          headerName:"Preview",
          width:100,
          renderCell:(params)=>{
return <Avatar   alt="Remy Sharp" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=692&q=80" />
          }
        },
        {
          field: 'type',
          headerName: 'House Type',
          width: 150,
          editable: true,
          renderCell:(params)=>{
            return <Box> {params.row.type}  {" "}
            
            <Chip size='small' onClick={()=>seeMore(params.row)} label="See More" variant="outlined"  />
           
            </Box>
          }

        },
        {
          field: 'Address',
          headerName: 'Address',
          width: 150,
          editable: true,
        },
    
      {field: 'Rent',
      headerName: 'House Rent',
      width: 150,
      editable: true,
    },
 
 
{field: 'Status',
headerName: 'Status',
width: 150,
editable: true,
},
 
 
{
  field:"Actions",
  headerName:"Actions",
  width:100,
  renderCell:(params)=>{

    return <Box>

      <IconButton onClick={()=>update(params.row)}>

        <BorderColorIcon sx={{color:"primary.dark"}}/>
      </IconButton>
      <IconButton onClick={()=>deleteHouse(params.row)}><DeleteForeverIcon sx={{color:"primary.dark"}} /></IconButton>
      
    </Box>
  },


},


{
  field:"images",
  headerName:"images",
  renderCell:(params)=>{
    return <Link to={`/dashboard/images/${params.row._id}/${params.row.type}`} >
<Chip size='small'   label="Image Folder" variant="outlined"  />

    </Link>
  }
}
      ];

      
// console.log(HousesData)
      const rows= HousesData ? HousesData : null

  return (
   <>
       <Box sx={{ height: 400, width: '100%' }}>



{/* Dailog  */}


<Dialog
        open={dailOpen}
        onClose={Toggle}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
        Type : {" "} {XogtaGuriga?.type} | Status : {" "} {XogtaGuriga?.Status}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">

            <Box sx={{p:2,width:500}}>


<Stack direction={'column'} spacing={2}>

<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Address : </Typography> 


<Box>
{XogtaGuriga?.Address}
</Box>

</Box>

<Divider/>
<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Age : </Typography> 


<Box>
{XogtaGuriga?.Age}
</Box>

</Box>

<Divider/>
<Stack direction={'row'} gap={2}>


<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Rent Amount : </Typography> 


<Box>
{XogtaGuriga?.Rent}
</Box>

</Box>


<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Deposit Amount : </Typography> 


<Box>
{XogtaGuriga?.Deposit}
</Box>

</Box>

</Stack>
<Divider/>


<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Parking : </Typography> 


<Box>
{XogtaGuriga?.Parking}
</Box>

</Box>

<Divider/>




<Stack direction={'row'} gap={2}>


<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Rooms : </Typography> 


<Box>
{XogtaGuriga?.Rooms}
</Box>

</Box>


<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>PathRooms: </Typography> 


<Box>
{XogtaGuriga?.Pathrooms}
</Box>

</Box>

</Stack>
<Divider/>

<Box sx={{display:'flex',gap:3,alignItems:'center'}}><Typography variant='h6'>Owner : </Typography> 


<Box>
{XogtaGuriga?.Owner}
</Box>

</Box>

<Divider/>

</Stack>






            </Box>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
         
          <Button onClick={Toggle} autoFocus>
            CLose
          </Button>
        </DialogActions>
      </Dialog>

{/*  */}
      <DataGrid
    
        rows={rows}
        columns={columns}

        getRowId={(row) => row._id}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
     
        disableRowSelectionOnClick
      />
    </Box>
   </>
  )
}