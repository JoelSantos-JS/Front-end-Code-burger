import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Login from './containers/Login'
import Register from './containers/Register'

function RoutesF() {
  return (
    <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>} />
    </Routes>
  )
}

export default RoutesF