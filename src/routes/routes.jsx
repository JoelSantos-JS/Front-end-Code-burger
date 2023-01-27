import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
import PrivateRoutes from './private-route'

function RoutesF() {
  return (
  

  
    <Routes>
      
      
     <Route element={<PrivateRoutes/>}>
        <Route element={<Home/>} path='/' exact/>
        <Route element={<Products/>} path='/produtos' />
     </Route>
    
  
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        
    </Routes>
   
  )
}

export default RoutesF