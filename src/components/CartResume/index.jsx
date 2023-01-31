import React, { useEffect, useState } from 'react'
import { Container, ContainerItems,ContainerTotal } from './style'
import  Button from   '../Button'

import formatCurrency from '../../utils/formatCurrency'
import { useCard } from '../../hooks/CardContext'
import api from '../../services/api'
import {  toast } from 'react-toastify';
function CartResume() {
  const [finalPrice , setFinalPrice] = useState(0)
  const [deliveryTax, setDeliveryTax] = useState(5)

  const {CardData} = useCard()

  useEffect(() => {
    const sumAllItems = CardData.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  },[CardData, deliveryTax])

  const submitOrder = async  () => {

    try {
      const order = CardData.map(product => {
        return {id: product.id , quantity: product.quantity}
      })
  
      await api.post('orders', {products: order})
      toast.success('Pedido Finalizado com sucesso', {
        position: "top-right",
        autoClose: 1380,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    } catch (error) {
      toast.error('Deu algum erro com seu Pedido', {
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
  
    
  }

  return (
    <div>
    <Container>
    <ContainerItems>
      <h2 className='title'>Resumo do pedido</h2>
      <p className='items'>Items</p>
      <p className='itemsPrice'>{formatCurrency(finalPrice)}</p>
      <p className='taxe'>Taxa de entrega</p>
      <p className='taxePrice'>{formatCurrency(deliveryTax)}</p>
    </ContainerItems>
    <ContainerTotal>
      <p>Total</p>
      <p>{formatCurrency(finalPrice + deliveryTax)}</p>
    </ContainerTotal>
    
    
    </Container>
    <Button style={{width: "100%", marginTop: "30"}} onClick={submitOrder}>Finalizar Pedido</Button>
    </div>
    
  )
}

export default CartResume
