import React from 'react'
import { SidebarAdmin } from '../../components/SideMenuAdmin'
import Orders from './Orders'
import { Container ,ContainerItems} from './style'
import ListProducts from './ListProducts'
function Admin() {
  return (
    <Container>
        <SidebarAdmin/>
        <ContainerItems>
        {/* <Orders/> */}
        <ListProducts/>
        </ContainerItems>
        </Container>
  )
}

export default Admin