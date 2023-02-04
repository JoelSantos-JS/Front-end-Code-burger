
import React from 'react'
import {FiShoppingBag} from 'react-icons/fi'
import paths from '../../constants/path'
import {BsCartFill} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom'


const listsLinks = [
    {
        id:1,
        label: 'Pedidos',
        link: paths.Orders,
        icon: <FiShoppingBag/>
    },
    {
        id:2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: <BsCartFill/>,
      
    },
]


export default listsLinks