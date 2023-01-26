import React, { useEffect, useState } from 'react'
import CategoriaLogo from '../../assets/CATEGORIAS.jpg'
import { CategoryContainer, CategoryImage , ContainerItems , Image, Button } from './style'

import api from '../../services/api'
import Carousel from 'react-elastic-carousel';


function CategoryCarrosel() {
  const [categories, setCategories] = useState()


    useEffect(() => {
        const loadCategories = async () => {
            const response = await api.get('categories')
            setCategories(response.data)
        }
        loadCategories()
    } ,[])

    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 400, itemsToShow: 2 },
      { width: 600, itemsToShow: 3 },
      { width: 900, itemsToShow: 4 },
      { width: 1300, itemsToShow: 5 }
  ]



   
  return (
    <CategoryContainer>
        <CategoryImage src={CategoriaLogo} alt='categoriaLogo' />
        <Carousel
                itemsToShow={5}
                style={{ width: '90%' }}
                breakPoints={breakPoints}
            >
                {categories &&
                    categories.map(category => (
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
    </CategoryContainer>
  )
}

export default CategoryCarrosel