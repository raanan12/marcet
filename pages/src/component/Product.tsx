import React,{useContext} from 'react'
import {AllData} from '../contextApi'

export default function Product(props:any) {
  const AllData1 = useContext(AllData)
  return (
    <div className='product' style={{display:'flex',flexDirection:'column',justifyContent:'space-between',margin:'5px',padding:'5px',width:'270px',height:'400px',marginTop:'20px'}}>
        <img style={{height:'235px',width:'255px',borderRadius:'10px'}} src={props.val.productImg} alt="" />
        <p>{props.val.productName}</p>
        <p style={{fontWeight:'bold',fontSize:'20px',textAlign:'right'}}>₪ {props.val.productPrice} </p>
        <button onClick={()=>{AllData1?.addProductCho(props.index)}} style={{background:'green',color:'white',border:'none',borderRadius:'4px',height:'25px',width:'150px',marginLeft:20}}>added to cart</button>
    </div>
  )
}
