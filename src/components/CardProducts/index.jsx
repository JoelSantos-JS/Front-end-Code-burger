import React from 'react'
import { Container, ProductName, ProductPrice,ContainerInfo, Image} from './style'
import Button from '../Button/'
import { useCard } from '../../hooks/CardContext'
import formatCurrency from '../../utils/formatCurrency'
import {  toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

function CardProducts({product}) {
  const {putCardData} = useCard()
  const navigate = useNavigate()

  const AdcData = (product) => {
    const newData = putCardData(product)
    try {
   
       
      toast.success('Item adicionando com sucesso', {
        position: "top-right",
        autoClose: 1380,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
        navigate('/carrinho')
    } catch (error) {
      toast.error('Error ao adicionar o item', {
        position: "top-right",
        autoClose: 1380,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

    return newData
  }


  return (
    <Container>
        <Image src={product.url}/>
        <ContainerInfo>

      
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{formatCurrency(product.price)}</ProductPrice>

        <Button onClick={() => AdcData(product)} >Adicionar</Button> 
       
        
        </ContainerInfo>
    </Container>
  )
}

export default CardProducts