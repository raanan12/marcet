import React,{useContext} from 'react'
import {AllData} from '../contextApi'
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

export default function ProductBuy(props:any) {
  const AllData1 = useContext(AllData)
  return (
    <div className='productChosB' style={{margin:'10px',display:"flex",justifyContent:'space-between',width:'75%'}}>
      <div style={{display:'flex',width:"400px"}}>
        <img style={{height:'110px',width:'160px',gridArea:'img1',borderRadius:'8px'}} src={props.val.productImg} alt="" />
        <p style={{gridArea:'name',marginLeft:'22px'}}>{props.val.productName}</p>
      </div>
        <p style={{gridArea:'price'}}> ₪ {props.val.productPrice} </p>
      <div style={{display:"flex"}}>
        <p style={{gridArea:'cunt'}}>{props.val.cunt}</p>
        <IconButton onClick={()=>{AllData1?.deleteProductChos(props.index)}} style={{gridArea:'delet',height:'50px',width:'50px',marginTop:'5px'}} aria-label="delete" size="large">
            <DeleteIcon/>
        </IconButton>
      </div>
    </div>
  )
}
  