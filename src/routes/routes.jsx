import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Register from '../containers/Register'
import PrivateRoutes from './private-route'

function RoutesF() {
  return (
  

  
    <Routes>
      
      
     <Route element={<PrivateRoutes/>}>
        <Route element={<Home/>} path='' exact/>
     </Route>
    
  
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        
    </Routes>
   
  )
}

export default RoutesF