import React, { useEffect, useState } from 'react'
import { Container, Img,CiEditButton } from './styles'
import api from '../../../services/api'
import {BsFillCheckSquareFill} from 'react-icons/bs'
import {MdCancel} from 'react-icons/md'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import formatCurrency from '../../../utils/formatCurrency'
import { SidebarAdmin } from '../../../components/SideMenuAdmin'
function ListProducts() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const loadOrders = async () => {
          const {data} = await api.get('products')
          
         
          setProducts(data)
      }
      loadOrders()
      },[])

      function isOffer(status) {
        if(status) {
            <BsFillCheckSquareFill size={32} style={{color: 'green'}}/>
        }

        return <MdCancel size={32} style={{color: 'red'}} />

      }

  return (
    <Container>
      <SidebarAdmin/>
       <TableContainer component={Paper} style={{background: '#e5e5e5'}}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow >
            <TableCell className='topmenu'>Nome</TableCell>
            <TableCell className='topmenu'>Preço</TableCell>
            <TableCell align='center' className='topmenu' >Produto em Ofertas</TableCell>
            <TableCell className='topmenu'>Imagem</TableCell>
            <TableCell className='topmenu'>Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody  style={{background: '#ffff'}}>
          {products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              
            >
              <TableCell component="th" scope="row" className='row'>
                {product.name}
              </TableCell>
              <TableCell className='row' >{formatCurrency(product.price)}</TableCell>
              <TableCell align='center'  className='row' >{isOffer(product.offer)}</TableCell>
              <TableCell  className='row' > <Img src={product.url} /> </TableCell>
              <TableCell   className='row'><CiEditButton size={32} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  )
}

export default ListProducts