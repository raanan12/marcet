import React,{useContext} from 'react'
import { AllData } from '../contextApi'
import Product from './Product'
export default function ListProduct() {
  let AllData1 = useContext(AllData)
  return (
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'space-around'}}>
        {
            AllData1?.products.map((val,index)=>{
                return <Product val={val} index={index}/>
            })
        }
    </div>
  )
}
