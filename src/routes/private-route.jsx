

import { Navigate,Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Admin from '../containers/Admin'

function PrivateRoutes() {
    const user = localStorage.getItem('dataUser')
   


      

    return(
      <>
 <Header/>
        
      {  user ? <Outlet/> : <Navigate to='/login' />}
        </>
    )
  }
  
  


export default PrivateRoutes

