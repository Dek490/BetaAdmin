import { Alert, Box, Button, Chip, Divider, Grid, Stack, TextField ,Typography} from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
 

const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
      author: '@bkristastucchio',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
      author: '@rollelflex_graphy726',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
      author: '@helloimnik',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
      author: '@nolanissac',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
      author: '@hjrc33',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
      author: '@arwinneil',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
      author: '@tjdragotta',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
      author: '@katie_wasserman',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
      author: '@silverdalex',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
      author: '@shelleypauls',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
      author: '@peterlaster',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
      author: '@southside_customs',
    },
  ];

export default function ImagesFolder() {
    const {id,type} = useParams()

  return (
<>
<Box>

    <Alert severity='info'>

Type : {type} {" "} Ref ID : {" "} {id}

    </Alert>
    <Divider sx={{height:20}} />
<Stack direction={'row'} spacing={2}>
<TextField fullWidth type='text' size='small' label="Title" variant='outlined' />
  
<TextField fullWidth type='file' size='small' variant='outlined' />

<Button variant='contained' size='small'>Upload</Button>
    
</Stack>

<Divider/>

<Box>


<Divider sx={{height:20}} />
<Grid container spacing={2}>

{itemData.map((item,index)=>{


return   <Grid item xs={12} sm={8} md={6} lg={4}> <Card sx={{ maxWidth: 345 }}>
     <CardMedia
     key={index}    sx={{ height: 140 }}
       image={item.img}
       title="green iguana"
     />
     <CardContent>
        <Box sx={{display:'flex',justifyContent:'space-between'}}>
       <Typography variant="body2" color="text.secondary">
        {item.title}
       </Typography>

       <Chip size='small'  label="Remove" variant="outlined"  />

       </Box>
     </CardContent>
   
   </Card>  </Grid>

})}


    {/* <Item>xs=6 md=8</Item> */}



    


  </Grid>






</Box>
 
</Box>
</>

  )
}
