import React,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import Alert from '@mui/material/Alert';
import { Button, TextField } from '@mui/material'
import {AllData} from '../contextApi'

export default function PropsClient() {
  const AllData1 = useContext(AllData)
  const nav = useNavigate()
  const [name,setName]=useState<string>('')
  const [email,setEmail]=useState<any>(AllData1?.userConect.email)
  const [phon,setPhon]=useState<string>('')
  const [city,setCity]=useState<string>('')
  const [street,setStreet]=useState<string>('')
  const [home,setHome]=useState<string>('')
  const [apartment,setApartment]=useState<string>('')
  const [show,setShow]=useState<number>(0)

  // show Alert toh form
  const show1 = ()=>{
    if(show == 1){
      setTimeout(() => {
        setShow(0)
      }, 2000);
      return  <Alert severity="error">no enter name</Alert>
    }
    if(show == 2){
      setTimeout(() => {
        setShow(0)
      }, 2000);
      return  <Alert severity="error">teh email is not valid</Alert>
    }
    if(show == 3){
      setTimeout(() => {
        setShow(0)
      }, 2000);
      return  <Alert severity="error">the phon is not valid</Alert>
    }
    if(show == 4){
      setTimeout(() => {
        setShow(0)
      }, 2000);
      return  <Alert severity="error">not enter adrees</Alert>
    }
  }


  const buy = async()=>{
    let num:number = 0
    AllData1?.choseProduct.forEach((val)=>{
        num += (val.productPrice * val.cunt)
    })
    let arr = {
      fullName: name,
      mail: email,
      phonNumber: phon,
      adress: `${city} ${street} ${home} ${apartment}`,
      listProduct: AllData1?.choseProduct,
      price:num
    }
    if(name.length < 4){
      setShow(1) 
    }
    else if(email.indexOf('@') == -1){
      setShow(2)
    }
    else if(phon.length != 9 && (phon.length != 13 || phon.charAt(0) != '+')){
      setShow(3)
    }
    else if(city.length < 2 || street.length <2){
      setShow(4)
    }
    else{
      await AllData1?.buyNow(arr)
      nav('/From')
    }

  }
  return (
      <div className='productBuy' style={{ width: '33%', textAlign: 'left', paddingLeft: '30px' ,display:'flex',flexDirection:'column',justifyContent:'space-around'}}>
          <p style={{fontWeight:'bold'}}>costumer details </p>
          <TextField value={email}  type='email' onChange={(e)=>  {setEmail(e.target.value)}} fullWidth label="Email" id="outlined-disabled" />
          <TextField onChange={(e) => {setName(e.target.value) }} fullWidth label="Full Name" id="outlined-disabled" />
          <TextField onChange={(e) => {setPhon(e.target.value) }} fullWidth label="Phone Number" id="outlined-disabled" />
          <TextField onChange={(e) => {setCity(e.target.value) }} fullWidth label="City" id="outlined-disabled" />
          <div style={{display:'flex'}}>
            <TextField onChange={(e) => {setStreet(e.target.value) }} style={{marginRight:'5px'}} label="Street" id="outlined-disabled"/>
            <TextField onChange={(e) => {setHome(e.target.value) }} style={{marginRight:'5px'}} label="Home" id="outlined-disabled"/>
            <TextField onChange={(e) => {setApartment(e.target.value) }} label="Apartment number" id="outlined-disabled"/>
          </div>
          <p>By clicking on the payment exemption, I agree to the site's regulations </p>
          <Button onClick={buy} style={{backgroundColor:'red',height:'50px',fontWeight:'700',fontSize:'17px',width:'100%',color:'white',boxShadow:'1px 1px 1px 1px gray'}}>Save and go to payment</Button>
          {show1()}
      </div>
  )
}
