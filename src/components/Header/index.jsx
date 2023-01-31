import React from 'react'
import { Container,ContainerLeft,PageLinkExit,ContainerRight,PageLink ,ContainerText,Line} from './styles'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {BsPeople} from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'
 
function Header() {
    const navigate = useNavigate()

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
        <AiOutlineShoppingCart size={30}/>
            </PageLink>

            <Line></Line>
            <PageLink>
            <BsPeople size={30}/>
            </PageLink>

            <ContainerText>
                <p>Ola Joel</p>
                <PageLinkExit>Sair</PageLinkExit>
            </ContainerText>
        </ContainerRight>
    </Container>
  )
}

export default Header