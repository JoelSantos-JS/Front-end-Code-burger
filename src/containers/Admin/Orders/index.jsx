import React, { useEffect, useState } from 'react'


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Paper from '@mui/material/Paper';


import { Container } from './style'
import api from '../../../services/api'
import Row from './row';
import formatDate from '../../../utils/formatDate';
function Orders() {

  
  const[orders , setOrders] = useState([])
  const[rows , setRows] = useState([])



  function createData(order) {
    return {
      name: order.user.name,
      orderId: order._id,
      data: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    };
  } 


  useEffect(() => {
    const newRows = orders.map(ord => createData(ord))
    setRows(newRows)
  },[orders])

  console.log(rows)


useEffect(() => {
  const loadOrders = async () => {
    const {data} = await api.get('orders')

   setOrders(data)
  
}

loadOrders()
},[])


{
  return (
    <Container>
       <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Pedido</TableCell>
            <TableCell >Cliente</TableCell>
            <TableCell >Data do pedido</TableCell>
            <TableCell >Status</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.orderId} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </Container>
  )
}
}
export default Orders