import React, { useEffect, useState } from 'react'
import OffersLogo from '../../assets/OFERTAS.png'
import { OffersContainer, OffersImage , ContainerItems , Image, Button } from './style'

import api from '../../services/api'
import Carousel from 'react-elastic-carousel';
import formatCurrency from '../../utils/formatCurrency';

function OffersCarousel() {
  const [products, setProducts] = useState()


    useEffect(() => {
        const loadProducts = async () => {
            const {data} = await api.get('products')
            const onyOffers = data.filter(product => product.offer)
            setProducts(onyOffers)
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
                    products.map(product => (
                        <ContainerItems key={product.id}>
                            <Image src={product.url} alt="foto da categoria" />
                            <p>{product.name}</p>
                            <p>Preço: {formatCurrency(product.price)}</p>
                          
                            <Button>
                                Peça agora
                                
                            </Button>
                        </ContainerItems>
                    ))}
            </Carousel>
    </OffersContainer>
  )
}

export default OffersCarousel