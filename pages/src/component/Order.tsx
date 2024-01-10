import React,{useContext} from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function Order(props:any) {
  return (
    <div className='productChosB' style={{ margin: '15px', borderBottom: '2px solid gרay', display: 'flex', justifyContent: 'space-between', width: '75%' }}>
      <div style={{ display: 'flex', width: "300px" }}>
        <img style={{ height: '110px', width: '160px', gridArea: 'img1', borderRadius: '8px' }} src={props.val.listProduct[0].productImg} alt="" />
      </div>
      <p style={{ gridArea: 'price' }}>{props.cunt} </p>
      <p style={{ gridArea: 'cunt' }}> ₪ {props.val.price}</p>

    </div>
  )
}
