import React,{useContext} from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
export default function Order(props:any) {
  return (
       <div className='productChosB' style={{margin:'5px',borderBottom:'2px solid gרay'}}>
          <ShoppingBagIcon style={{height:'110px',width:'160px',gridArea:'img1',borderRadius:'8px'}}/>
          <p style={{gridArea:'name'}}>{props.ind}</p>
          <p style={{gridArea:'price'}}>{props.cunt} </p>
          <p style={{gridArea:'cunt'}}> ₪ {props.val.price}</p>
      </div>
  )
}
