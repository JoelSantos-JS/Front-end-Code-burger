import React from 'react'
import { CartContainer, ImageCart ,Wrapper} from './style'
import cartImagem from '../../assets/telafineshed.svg'
import CartItems from '../CartItems'

function Cart() {
  return (
    <CartContainer>
            <ImageCart src={cartImagem} alt="" />

        <Wrapper>
        <CartItems/>
        </Wrapper>
      

    </CartContainer>
  )
}

export default Cart