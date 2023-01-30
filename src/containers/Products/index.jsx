import React, { useEffect, useState } from 'react'
import productsImg from '../../assets/products.svg'
import CardProducts from '../../components/CardProducts'
import api from '../../services/api'
import { ProductsContainer, ProductsImg, Container, CategoryButton,CategoriesMenu } from './style'

function Products() {

  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

    useEffect(() => {
        const loadCategories = async () => {
            const {data} = await api.get('categories')

            const newCategories = [{id: 0 , name: 'Todas'}, ...data]
          
            setCategories(newCategories)
        }
        

        const loadProducts= async () => {
          const {data} = await api.get('products')


          
        
          setProducts(data)
      }
      loadCategories()
      loadProducts()
    } ,[])

 useEffect(() => {
  if(activeCategory === 0 ){
    setFilterProducts(products)
  }else{
    const newFilterProducts = products.filter(
      product => product.category_id === activeCategory
    )
 

    setFilterProducts(newFilterProducts)
  }
 }, [activeCategory,products])


  return (
    <Container>

<ProductsImg src={productsImg} alt="logo da home" />
      <CategoriesMenu>
              {categories && categories.map(category => (
                <CategoryButton isActiveCategory={ activeCategory === category.id} type='button' key={category.id} onClick={() => {setActiveCategory(category.id)}}>{category.name}</CategoryButton>
              ))}
                   </CategoriesMenu>

                  <ProductsContainer>
                    {filterProducts && filterProducts.map(product => (
                       <CardProducts key={product.id} product={product}/>
                    ))}
               
                    </ProductsContainer>
            </Container>
  )
}

export default Products