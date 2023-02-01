import React from 'react'
import { Container,ContainerLeft,PageLinkExit,ContainerRight,PageLink ,ContainerText,Line} from './styles'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
import { useUser } from '../../hooks/UserContext'
 
function Header() {
    const { logout} = useUser()
    const navigate = useNavigate()
    const {userData} =useUser()

    const logoutUser = () => {
        logout()

        setTimeout(() => {
            navigate('/login')
        },1800)
     
    }

  return (
    <Container>
        <ContainerLeft>
            <PageLink onClick={() => navigate('/')}>
                Home
            </PageLink>
            <Line></Line>
            <PageLink onClick={() => navigate('/produtos')}>
               Ver Produtos
            </PageLink>
        </ContainerLeft>

        <ContainerRight>
        <PageLink>
        <AiOutlineShoppingCart size={30} onClick={() => navigate('/carrinho')}/>
            </PageLink>

            <Line></Line>
            <PageLink>
            <BsPeople size={30}/>
            </PageLink>

            <ContainerText>
                <p>Ola {userData.name}</p>
                <PageLinkExit onClick={() => logoutUser()}>Sair</PageLinkExit>
            </ContainerText>
        </ContainerRight>
    </Container>
  )
}

export default Header