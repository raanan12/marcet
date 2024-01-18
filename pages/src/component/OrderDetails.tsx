import React,{useContext,useState} from 'react'
import {AllData} from '../contextApi'
import './styls/propsClientStyle.css'

export default function () {
  const AllData1 = useContext(AllData)
  const [user,setUser]=useState(AllData1?.productsNow)
  return (
    <div className='main1P' >
      <p> <span style={{fontWeight:'bold'}}> name order: </span> {user?.fullName}</p>        
      <p> <span style={{fontWeight:'bold'}}> adress order: </span> {user?.adress}</p>
      <p> <span style={{fontWeight:'bold'}}> Email: </span>  {user?.mail}</p>
      <p> <span style={{fontWeight:'bold'}}> phon number: </span> {user?.phonNumber}</p>
      <p> <span style={{fontWeight:'bold'}}> final price : </span> <span style={{fontWeight:'bold',fontSize:'25px'}}>₪</span>  {user?.price} </p>

    </div>
  )
}
