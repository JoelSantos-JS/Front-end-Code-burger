import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { createContext, useContext } from 'react'


import {  toast } from 'react-toastify';
const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [userData, setUserData] = useState({})
 

    const putUserData = async (userInfo) => {
        setUserData(userInfo)

        await localStorage.setItem('dataUser', JSON.stringify(userInfo))
    }


    const logout =  async () => {
        try {
            await localStorage.removeItem('dataUser')
            toast.success('Deslogado  com sucesso', {
                position: "top-right",
                autoClose: 1380,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });

          

        } catch (error) {
            toast.error('Algo errado.', {
                position: "top-right",
                autoClose: 1380,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }
        
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
        <UserContext.Provider value={{putUserData, logout, userData}}>
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

