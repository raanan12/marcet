import React,{useContext} from 'react'
import { AllData } from '../contextApi'

export default function PropsUser() {
  const AllData1 = useContext(AllData)
  return (
    <div className='productBuy' style={{fontSize:'20px', width: '33%', textAlign: 'left', paddingLeft: '30px' ,display:'flex',flexDirection:'column'}}>
    <p> <span style={{fontWeight:'bold'}}> name : </span> {AllData1?.userConect.name}</p>        
    <p> <span style={{fontWeight:'bold'}}> Email: </span>  {AllData1?.userConect.email}</p>
    <p> <span style={{fontWeight:'bold'}}>order number : </span> {AllData1?.userConect.arrOrder.length} </p>
  </div>
  )
}
