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
import paths from '../constants/path'
import Orders from '../containers/Admin/Orders'
import ListProducts from '../containers/Admin/ListProducts'
import NewProducts from '../containers/Admin/NewProducts'
import EditProduct from '../containers/Admin/EditProduct'

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
     <Route element={<Admin/> } path={paths.Order} isAdmin={true} />
     <Route element={<Orders/> } path={paths.Orders} isAdmin={true} />
     <Route element={<ListProducts/> } path={paths.Products} isAdmin={true} />
     <Route element={<NewProducts/> } path={paths.NewProduct} isAdmin={true} />
     <Route element={<EditProduct/> } path={paths.EditeProduct} isAdmin={true} />
     </Route>
    
  
        
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
        
    </Routes>
    </BrowserRouter>
   
  )
}

export default RoutesF