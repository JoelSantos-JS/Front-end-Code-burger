import React, { useEffect, useState } from 'react'
import OffersLogo from '../../assets/OFERTAS.png'
import { OffersContainer, OffersImage , ContainerItems , Image, Button } from './style'

import api from '../../services/api'
import Carousel from 'react-elastic-carousel';


function OffersCarousel() {
  const [products, setProducts] = useState()


    useEffect(() => {
        const loadProducts = async () => {
            const response = await api.get('products')
            setProducts(response.data)
        }
        loadProducts()
    } ,[])

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 400, itemsToShow: 2 },
      { width: 600, itemsToShow: 3 },
      { width: 900, itemsToShow: 4 },
      { width: 1300, itemsToShow: 5 }
  ]



   
  return (
    <OffersContainer>
        <OffersImage src={OffersLogo} alt='categoriaLogo' />
        <Carousel
                itemsToShow={7}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {products &&
                    products.map(category => (
                        <ContainerItems key={category.id}>
                            <Image src={category.url} alt="foto da categoria" />
                            <Button
                                to={{
                                    pathname: '/produtos',
                                    state: { categoryId: category.id }
                                }}
                            >
                                {category.name}
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>
    </OffersContainer>
  )
}

export default OffersCarousel