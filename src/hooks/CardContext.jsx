import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext, useContext } from 'react'


const CardContext = createContext({})

export const CardProvider = ({children}) => {
    const [CardData, setCardData] = useState([])


    const updateLocalStorage = async (products) => {
        await localStorage.setItem('dataInfo', JSON.stringify(products))
    }

    const putCardData = async (product) => {
       const cardIndex = CardData.findIndex(prd => prd.id === product.id)

       let newCartProducts = []
       if(cardIndex >= 0) {
         newCartProducts = CardData
         newCartProducts[cardIndex].quantity = newCartProducts[cardIndex].quantity + 1
        setCardData(newCartProducts)

       }else  {
        product.quantity = 1
        newCartProducts = [...CardData, product]
        setCardData(newCartProducts)
       }

      await updateLocalStorage(newCartProducts)
    }

    const deleteProduct = async ProductId => {
        const newCart = CardData.filter(product => product.id !== ProductId)

        setCardData(newCart)
      await   updateLocalStorage(newCart)
    }


    const increaseProducts = async  ProductID => {
        const newCart = CardData.map( product => {
            return product.id === ProductID ? {...product, quantity: product.quantity +1}: product
        })

        setCardData(newCart)
       await updateLocalStorage(newCart)
    }

    const decreaseProducts = async ProductId => {
        const newIndex = CardData.findIndex( pd => pd.id === ProductId)

        if(CardData[newIndex].quantity > 0){


        const newCart = CardData.map(product => {
            return product.id === ProductId  ? {...product ,  quantity: product.quantity -1}: product
        })
       
        setCardData(newCart)
      await  updateLocalStorage(newCart)
    }

    }


    useEffect(() => {
        const loadCardData = async () => {
            const clientCartData = await localStorage.getItem('dataInfo')
            if(clientCartData) {
                setCardData(JSON.parse(clientCartData))
            }
 
        }
        loadCardData()
    }, [])

   

    return (
        <CardContext.Provider value={{putCardData, CardData,deleteProduct, increaseProducts,decreaseProducts}}>
            {children}
        </CardContext.Provider>
    )
}

export const useCard = () => {
    const context = useContext(CardContext)

    if(!context) {
        throw new Error('Erro')
    }


    return context
}

