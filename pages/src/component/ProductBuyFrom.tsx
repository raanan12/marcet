import React from 'react'
import './styls/productBuyStyle.css'

export default function ProductBuyFrom(props:any) {
    return (
      <div className='productChosB1' >
        <div className='imgName'>
          <img className='img1' src={props.val.productImg} alt="" />
          <p style={{ marginLeft: '22px' }}>{props.val.productName}</p>
        </div>

        <p className='pricef' > ₪ {props.val.productPrice} </p>

        <div className='buttonDelF' style={{ display: "flex" }}>
          <p className='acuntB' style={{ gridArea: 'cunt' }}>amunt : {props.val.cunt}</p>
        </div>

      </div>
    )
}
