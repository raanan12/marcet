import React,{useContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import {AllData} from '../contextApi'
 

export default function SignIn(props:any) {
  const nav = useNavigate()
  const AllData1 = useContext(AllData)  
  const [name,setName]=useState<string>('')
  const [password,setPassword]=useState<string>('')


  const chackAndAddProps = async (name:string,password:string) =>{
    if(name.length < 3 || name.length > 8){
        alert('name is not valid')
    }
    else if(password.length <5 || password.length >9){
        alert('password not valid')
    }
    else{
        let result = await AllData1?.signIn(name, password)
        console.log(result);
        
        if(result){
            nav('/')
        }
        else{
            alert('the user not exist')
        }
    }
  }
 
  return (
     <div style={{ display: 'flex', flexDirection: 'column', width: 350, margin: 'auto', height: 300, justifyContent: 'space-around' }}>
          <h1> Sign In</h1>
          <TextField onChange={(e) => { setName(e.target.value) }} label="Enter your name" variant="outlined" />
          <TextField onChange={(e) => { setPassword(e.target.value) }} label="Ente your password" variant="outlined" />
          <div style={{display:'flex',justifyContent:'space-around'}}>
              <Button onClick={() => {chackAndAddProps(name, password)}} variant="contained">sign in</Button>
              <Button onClick={() => {nav('/signUp')}} variant="outlined">sign up</Button>
          </div>
      </div>
  )
}
