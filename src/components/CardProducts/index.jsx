import React from 'react'
import { Container, ProductName, ProductPrice,ContainerInfo, Image} from './style'
import Button from '../Button/'
import { useCard } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'

function CardProducts({product}) {
  const {putCardData} = useCard()
  return (
    <Container>
        <Image src={product.url}/>
        <ContainerInfo>

      
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>
        <Button onClick={() => putCardData(product)} >Adicionar</Button>
        </ContainerInfo>
    </Container>
  )
}

export default CardProducts