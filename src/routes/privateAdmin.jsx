

import { Navigate,Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Admin from '../containers/Admin'

function PrivateAdmin({isAdmin}) {
    const user = localStorage.getItem('dataUser')
   
    const  user2 = !JSON.parse(user).admin

    console.log(user2)

      if(isAdmin && user2){
        <Navigate to='/' />
      }



    return(
      <>
    {isAdmin && user2}
        
      {  user ? <Outlet/> : <Navigate to='/login' />}
        </>
    )
}
  
  
  


export default PrivateAdmin

