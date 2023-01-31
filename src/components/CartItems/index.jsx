import React, { useState } from 'react'
import { useCard } from '../../hooks/CardContext'
import { Container , Body,  Header,EmptyCart} from './styles'
import formatCurrency from '../../utils/formatCurrency'
import { BsTrashFill } from 'react-icons/bs';
function CartItems() {
    const {CardData,deleteProduct, increaseProducts,decreaseProducts} = useCard()

 
    console.log(CardData)

  return (
    <Container>
        <Header>
        <p></p>
        <p>Items</p>
        <p>Preço</p>
        <p style={{paddingRight: 30}}>Quantidade</p>
        <p>Total</p>
        </Header>

            {CardData && CardData.length > 0 ? CardData.map(product => (
    <Body key={product.id}>
            <img src={product.url} />
            <p>{product.name}</p>
            <p>{formatCurrency(product.price)}</p>

            <div className='quantity'>
                <button onClick={() => decreaseProducts(product.id)}>-</button>
            <p  >{product.quantity}</p>
            <button onClick={() => increaseProducts(product.id) }>+</button>
            </div>
           
            <p>{formatCurrency(product.price * product.quantity)}</p>
            <p onClick={() => deleteProduct(product.id)} style={{cursor: "pointer"}}><BsTrashFill size={25}/></p>
        </Body>
            )): 
                    (
                        <EmptyCart>Carrinho Vazio</EmptyCart>
                    )
            }
       
    </Container>
  )
}

export default CartItems