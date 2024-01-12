import React,{useContext} from 'react';
import {AllData} from '../contextApi';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import './styls/productBuyStyle.css'
export default function ProductBuy(props:any) {
  const AllData1 = useContext(AllData)
  return (
    <div className='productChosB1' >
      <div className='imgName'>
        <img className='img1' src={props.val.productImg} alt="" />
        <p style={{marginLeft:'22px'}}>{props.val.productName}</p>
      </div>
        <p className='price'> ₪ {props.val.productPrice} </p>
      <div className='buttonDel' style={{display:"flex"}}>
        <p className='acuntB'>{props.val.cunt}</p>
        <IconButton onClick={()=>{AllData1?.deleteProductChos(props.index)}} style={{gridArea:'delet',height:'50px',width:'50px',marginTop:'5px'}} aria-label="delete" size="large">
            <DeleteIcon/>
        </IconButton>
      </div>
    </div>
  )
}
  