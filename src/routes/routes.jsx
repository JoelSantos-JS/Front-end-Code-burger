import React from 'react'
import {  BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from '../containers/Admin'
import Cart from '../containers/Cart'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Products from '../containers/Products'
import Register from '../containers/Register'
import PrivateRoutes from './private-route'
import PrivateAdmin from './privateAdmin'

function RoutesF() {
  return (
  

  <BrowserRouter>

    <Routes>
      
      
     <Route element={<PrivateRoutes/>}>
        <Route element={<Home/>} path='/' exact/>
        <Route element={<Products/>} path='/produtos' />
        <Route element={<Cart/>} path='/carrinho' />

     </Route>

     <Route element={<PrivateAdmin/>}>
     <Route element={<Admin/> } path='/admin' isAdmin={true} />
     </Route>
    
  
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        
    </Routes>
    </BrowserRouter>
   
  )
}

export default RoutesF