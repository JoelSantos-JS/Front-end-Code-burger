import React from 'react'
import { Container, ProductName, ProductPrice,ContainerInfo, Image} from './style'
import Button from '../Button/'

import formatCurrency from '../../utils/formatCurrency'

function CardProducts({product}) {
  return (
    <Container>
        <Image src={product.url}/>
        <ContainerInfo>

      
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button>Adicionar</Button>
        </ContainerInfo>
    </Container>
  )
}

export default CardProducts