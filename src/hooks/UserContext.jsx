import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext, useContext } from 'react'


const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})

    const putUserData = async (userInfo) => {
        setUserData(userInfo)

        await localStorage.setItem('dataUser', JSON.stringify(userInfo))
    }



    useEffect(() => {
        const loadUserData = async () => {
            const clientInfo = await localStorage.getItem('dataUser')
            if(clientInfo) {
                setUserData(JSON.parse(clientInfo))
            }
 
        }
        loadUserData()
    }, [])

   

    return (
        <UserContext.Provider value={{putUserData, userData}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)

    if(!context) {
        throw new Error('Erro')
    }


    return context
}

