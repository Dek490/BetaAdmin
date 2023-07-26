 
import { Route, Routes } from 'react-router-dom'
import './App.css'
 
import { Dashboard } from './Dashboard/Dashboard'
import { Clients } from './clients/client'
import Services from './Services/services'
import Home from './Home/Home'
 

function App() {


  return (
    <>


    
    <Routes>

      <Route path='/' element={<h2>Login page</h2>}/>

<Route path='dashboard' element={<Dashboard/>}>

<Route path='client' element={<Clients/>}/>
<Route path='services' element={<Services/>}/>
<Route path='home' element={<Home/>}/>
</Route>

    </Routes>
 

    </>
  )
}

export default App
