import React from 'react'

export default function ProductBuyFrom(props:any) {
    return (
      <div className='productChosB' style={{margin:'10px',display:"flex",justifyContent:'space-between',width:'75%'}}>
      <div style={{display:'flex',width:"400px"}}>
        <img style={{height:'110px',width:'160px',gridArea:'img1',borderRadius:'8px'}} src={props.val.productImg} alt="" />
        <p style={{gridArea:'name',marginLeft:'22px'}}>{props.val.productName}</p>
      </div>
        <p style={{gridArea:'price'}}> ₪ {props.val.productPrice} </p>
      <div style={{display:"flex"}}>
        <p style={{gridArea:'cunt'}}>{props.val.cunt}</p>
      </div>
      
      </div>
    )
}
