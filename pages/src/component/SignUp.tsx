import React,{useContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import {AllData} from '../contextApi'
export default function SignUp(props:any) {
  const nav = useNavigate()
  const AllData1 = useContext(AllData)  
  const [name,setName]=useState<string>('')
  const [password,setPassword]=useState<string>('')
  const [email,setEmail]=useState<string>('')
  const [passwordConfirmation,setPasswordConfirmation]=useState<string>('')
  const chackAndAddProps = async (name:string,password:string,passwordConfirmation:string,email:string) =>{
    if(name.length < 3 || name.length > 8){
        alert('name is not valid')
    }
    else if(password.length <5 || password.length >9){
        alert('password not valid')
    }
    else if(passwordConfirmation != password){
        alert('password Confirmation not valid')
    }
    else if(email.length < 3 || email.indexOf('@') == -1){
        alert('email is not vulid')
    }
    else{
        let result = await AllData1?.addUser(name, password,email)
        if(result){
            nav('/')
        }
        else{
            alert('the user exist')
        }
    }
  }
  
  
  return (
        <div style={{ display: 'flex', flexDirection: 'column', width: 350, margin: 'auto', height: 360, justifyContent: 'space-around' }}>
            <h1> Sign Up</h1>
            <TextField onChange={(e) => { setName(e.target.value) }} label="Enter your name" variant="outlined" />
            <TextField onChange={(e) => { setEmail(e.target.value) }} label='enter yure email'/>
            <TextField onChange={(e) => { setPassword(e.target.value) }} label="Ente your password" variant="outlined" />
            <TextField onChange={(e) => { setPasswordConfirmation(e.target.value) }} label="Password Confirmation" variant="outlined" />
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <Button onClick={() => {chackAndAddProps(name,password,passwordConfirmation,email)}} variant="contained">sign Up</Button>
                <Button onClick={() => {nav('/signIn')}} variant="outlined">Sign In</Button>
            </div>
        </div>
  )
}
