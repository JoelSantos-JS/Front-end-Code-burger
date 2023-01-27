import React from 'react'
import products from '../../assets/products.svg'
import CategoryCarrosel from '../../components/CategoryCarrosel'
import OffersCarousel from '../../components/OffersCarousel'
import { ProductsContainer, ProductsImg } from './style'

function Products() {
  return (
    <ProductsContainer>
        <ProductsImg src={products} alt="logo da home" />
            
            </ProductsContainer>
  )
}

export default Products