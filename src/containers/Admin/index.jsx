import React from 'react'
import { SidebarAdmin } from '../../components/SideMenuAdmin'
import Orders from './Orders'
import { Container ,ContainerItems} from './style'
import ListProducts from './ListProducts'
import { useNavigate } from 'react-router-dom'
import paths from '../../constants/path' 
function Admin() {
  const navigate =useNavigate()

  const match = {
    Order: '/admin',
    Products: '/listar-produtos',
    EditeProduct: '/editar-Produto',
    NewProduct: '/novo-produto'
  }



  return (
    <Container>
        <SidebarAdmin/>
      
        <ContainerItems>
       
        </ContainerItems>
        </Container>
  )
}

export default Admin