import React from 'react'

export default function ProductBuyFrom(props:any) {
    return (
      <div className='productChosB' style={{margin:'5px',}}>
          <img style={{height:'110px',width:'160px',gridArea:'img1',borderRadius:'8px'}} src={props.val.productImg} alt="" />
          <p style={{gridArea:'name'}}>{props.val.productName}</p>
          <p style={{gridArea:'price'}}>₪ {props.val.productPrice} </p>
          <p style={{gridArea:'cunt'}}>{props.val.cunt}</p>
      </div>
    )
}
