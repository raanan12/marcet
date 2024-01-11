import React,{useContext} from 'react'
import {AllData} from '../contextApi'
import './styls/styleProduct.css'
export default function Product(props:any) {
  const AllData1 = useContext(AllData)
  return (
    <div className='product'  >
        <img className='img'  src={props.val.productImg} alt="" />
        <p>{props.val.productName}</p>
        <p style={{fontWeight:'bold',fontSize:'20px',textAlign:'right'}}>₪ {props.val.productPrice} </p>
        <button onClick={()=>{AllData1?.addProductCho(props.index)}} className='button'>added to cart</button>
    </div>
  )
}
