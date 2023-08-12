import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import jscookie from 'js-cookie'
export default function NotFound() {
  const usenav = useNavigate()
useEffect(()=>{
if(!jscookie.get('token')){
  usenav('/')
}
  
// if(jscookie.get('token')){
//   usenav('/')
// }
 
},[])

  return  <div>Not found</div>
}