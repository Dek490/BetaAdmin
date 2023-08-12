 
import { Route, Routes } from 'react-router-dom'
import './App.css'
 
import { Dashboard } from './Dashboard/Dashboard'
import { Clients } from './clients/client'
import Services from './Services/services'
import Home from './Home/Home'
import About from './About/about'
import NotFound from './notfound'
import ImagesFolder from './Home/ImagesFolder'
import Login from './Login/login'
import { useUserContext } from './ContextApi/UserContext'
import Logout from './Login/logout'
 

function App() {
const {islogin} = useUserContext()
console.log(islogin)  
  return (
    <>


    
    <Routes>

      <Route path='/' element={<Login/>}/>
      <Route path='/logout' element={<Logout/>}/>
      <Route path='*' element={<NotFound/>}/>


{ islogin && <Route path='dashboard' element={<Dashboard/>}>

<Route path='client' element={<Clients/>}/>
<Route path='services' element={<Services/>}/>
<Route path='home' element={<Home/>}/>
<Route path='images/:id/:type' element={<ImagesFolder/>}/>
<Route path='about' element={<About/>}/>
</Route> }

    </Routes>
 

    </>
  )
}

export default App
