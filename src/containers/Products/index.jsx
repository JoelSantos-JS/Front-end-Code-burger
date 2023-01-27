import React, { useEffect, useState } from 'react'
import products from '../../assets/products.svg'
import api from '../../services/api'
import { ProductsContainer, ProductsImg, CategoryButton,CategoriesMenu } from './style'

function Products() {

  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

console.log(activeCategory)
    useEffect(() => {
        const loadCategories = async () => {
            const {data} = await api.get('categories')

            const newCategories = [{id: 0 , name: 'Todas'}, ...data]
          
            setCategories(newCategories)
        }
        loadCategories()
    } ,[])
  return (
    <ProductsContainer>

<ProductsImg src={products} alt="logo da home" />
      <CategoriesMenu>
              {categories && categories.map(category => (
                <CategoryButton isActiveCategory={ activeCategory === category.id} type='button' key={category.id} onClick={() => {setActiveCategory(category.id)}}>{category.name}</CategoryButton>
              ))}
                   </CategoriesMenu>
            </ProductsContainer>
  )
}

export default Products