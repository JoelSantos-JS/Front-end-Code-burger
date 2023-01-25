

import { Navigate,Outlet } from 'react-router-dom'

function PrivateRoutes() {
    const user = localStorage.getItem('dataUser')
  
  
    return(
        user ? <Outlet/> : <Navigate to='/login' />
    )
  }
  


export default PrivateRoutes

