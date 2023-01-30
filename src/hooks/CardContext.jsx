import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext, useContext } from 'react'


const CardContext = createContext({})

export const CardProvider = ({children}) => {
    const [CardData, setCardData] = useState([])

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

       await localStorage.setItem('dataInfo', JSON.stringify(newCartProducts))
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
        <CardContext.Provider value={{putCardData, CardData}}>
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

