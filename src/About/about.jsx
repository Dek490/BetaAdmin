import { Alert, Box, Button, Divider, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { AddQuery, GetQuery } from '../shared/reactquery';
export default function About() {
    const [fyar, setfyar] = useState('');
    const [fb, setfb] = useState('');
const {data}=GetQuery("/about","about")
// const {mutateAsync = AddQuery("/about","about")
 

const {mutateAsync}=AddQuery("/about","about")
useEffect(()=>{
    setfyar(data[0]?.FaahFaaahinYar)
    setfb(data[0]?.FaahFaahin)
},data)
const UpdateAbout = ()=>{

    const data={
        FaahFaaahinYar:fyar,
        FaahFaahin:fb
    }

    console.log(data)
mutateAsync(data).then(()=>{console.log("data has been updated")})
    }
  return (
    <>
    <Box >
<Alert severity='info' >About Beta House</Alert>

<Divider sx={{my:5}}/>




<Stack direction={'column'} spacing={3}>

    <Button variant='contained' onClick={()=>UpdateAbout()}>Save</Button>
<Box>
<Typography >Faah Faahin Yar</Typography>
<br/>
<ReactQuill theme="snow" style={{minHeight:150}} placeholder='Faah Faahin Kooban' value={fyar} onChange={setfyar} />

</Box>

<Divider sx={{my:1}}/>
<Box>
<Typography >Faah Faahin Badan</Typography>
<br/>
<ReactQuill theme="snow" style={{minHeight:200}} placeholder='Faah Faahin Kooban' value={fb} onChange={setfb} />

</Box>


</Stack>
    </Box>
    
    </>
  )
}
