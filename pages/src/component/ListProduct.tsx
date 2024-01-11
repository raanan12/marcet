import React,{useContext} from 'react';
import { AllData } from '../contextApi';
import Product from './Product';
import './styls/styleListProduct.css'
export default function ListProduct() {
  let AllData1 = useContext(AllData)
  return (
    <div className="main">
        {
            AllData1?.products.map((val,index)=>{
                return <Product val={val} index={index}/>
            })
        }
    </div>
  )
}
