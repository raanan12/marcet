import React,{useContext,useState,useEffect} from 'react'
import {AllData} from '../contextApi'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Alert from '@mui/material/Alert';
import { Box } from '@mui/material';
import Header from './Header';
import ProductBuyFrom from './ProductBuyFrom';
import OrderDetails from './OrderDetails';
export default function ShowBuyAfthr() {
  const AllData1 = useContext(AllData)
  return (
    <div>
        <Header/>
      <Alert sx={{margin:'20px',fontSize:'20px'}} variant="filled" severity="success"> The purchase was made successfully</Alert>
        <div style={{}}>

        </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '15px', height: '500px' }}>
        <div className='productBuy'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '8px' }}>
              <ShoppingCartIcon sx={{ marginRight: '8px', fontSize: '19px', padding: '1px', justifyContent: 'center', background: 'gray', display: 'flex', alignItems: "center", borderRadius: '3px' }} />
              <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold' }}>the products you purchased</p>
            </div>
            <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold', marginLeft: '230px' }}> price</p>
            <p style={{ fontSize: '18px', color: 'gray', fontWeight: 'bold', marginLeft: '160px' }}>Amount</p>
          </div>
          <Box
            sx={{
              flexWrap: 'wrap',
              overflowY: 'scroll',
              height: '400px',
              '&::-webkit-scrollbar': {
                width: '8px',
                height: '20px'
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#888',
                borderRadius: '4px'
              },

            }}
          >
            {AllData1?.productsNow.listProduct.map((val: any, index: any) => (
              <ProductBuyFrom val={val} index={index} />
            ))}
          </Box>
        </div>
        <OrderDetails />
      </div>
    </div>
  )
}
