import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react'

export default function ClientList({clientsData}) {

    const DeleteClient = (id)=>{
console.log(id)
    }


    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'ClientName',
          headerName: 'Client Name',
          width: 150,
          editable: true,
        },
        {
          field: 'Logo',
          headerName: 'Logo',
          width: 150,
          editable: true,
        },

        // {
        //    field:"Delete",
        //     headerName:"Delete",
        //     renderCell:(params)=>{
        //     return <Button onClick={()=>DeleteClient(params.row._id)} variant='outlined'  size='small'>Delete</Button>
            
        
        // }
        // }
      
      ];
      
    //   console.log("Clients",clientsData)
      const rows=  clientsData ? clientsData.map(items =>({
       id :items._id,...items


      })) : null 
     
    //     { id: 1, lastName: 'Snow', firstName: 'Jon'},
    //     { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
    //     { id: 3, lastName: 'Lannister', firstName: 'Jaime'},
    //     { id: 4, lastName: 'Stark', firstName: 'Arya' },
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
    //     { id: 6, lastName: 'Melisandre', firstName: null},
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini' },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey'},
    //     { id: 5, lastName: 'Targaryen', firstName: 'Daenerys' },
    //     { id: 6, lastName: 'Melisandre', firstName: null},
    //     { id: 7, lastName: 'Clifford', firstName: 'Ferrara'},
    //     { id: 8, lastName: 'Frances', firstName: 'Rossini' },
    //     { id: 9, lastName: 'Roxie', firstName: 'Harvey'},
    //   ];

  return (
   <>
       <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      
        rows={rows}
        columns={columns}
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
