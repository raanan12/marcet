import React,{useContext,useState,useEffect} from 'react'
import {AllData} from '../contextApi'
import ProductBuy from './ProductBuy'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';


export default function ListProductBiy() {
  const AllData1 = useContext(AllData)
  const [price,setPrice]=useState<number>()
  useEffect(()=>{
    let num:number = 0
    AllData1?.choseProduct.forEach((val)=>{
        num += (val.productPrice * val.cunt)
    })
    setPrice(num)
  },[AllData1?.choseProduct])
  return (
    <div className='productBuy'>
        <div style={{display:'flex',alignItems:'center'}}>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginLeft:'8px'}}>
               <ShoppingCartIcon sx={{marginRight:'8px',fontSize:'19px',padding:'1px',justifyContent:'center',background:'gray',display:'flex',alignItems:"center",borderRadius:'3px'}}/>
               <p style={{fontSize:'18px',color:'gray',fontWeight:'bold'}}> {`your shopping cart (${AllData1?.choseProduct.length} products)` }</p>
            </div>
            <p style={{fontSize:'18px',color:'gray',fontWeight:'bold',marginLeft:'200px'}}> price</p>
            <p style={{fontSize:'18px',color:'gray',fontWeight:'bold',marginLeft:'160px'}}>Amount</p>
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
              {AllData1?.choseProduct.map((val,index) => (
                  <ProductBuy val={val} index={index}/>
              ))}
          </Box>
        <p style={{textAlign:'left',fontSize:'20px',fontWeight:'600',margin:'10px',marginTop:'40px'}}>Total payment: ...... {price} ₪</p>
    </div>
  )
}
