import React,{useContext,useState} from 'react'
import {useNavigate} from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import {AllData} from '../contextApi'
import './styls/signUp.css';
import { AccountCircle } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TikTokIcon from '@mui/icons-material/VideoLabel';
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
      <div className='main1S'>

          <div className='part1'>
              <p className='title'>Welcome to GlobalMallOnline...</p>
              <p className='direction'>We are glad you chose to reconnect with us,
                  We are here to always give you the shopping experience from home in the most convenient and best way,
                  Our customer service team is at your disposal 24/7. You are welcome to contact us with anything you need
                  At GlobalMallOnline, we have made customer service our motto and we will be happy to hear from you about any problems that arise on the site.
                  Greetings GlobalMallOnline team</p>
              <div className='down'>
                  <MailOutlineIcon className='iconDown' />
                  <YouTubeIcon className='iconDown' />
                  <FacebookIcon className='iconDown' />
                  <InstagramIcon className='iconDown' />
                  <TwitterIcon className='iconDown' />
                  <TikTokIcon className='iconDown' />
              </div>
          </div>


          <div className='part2'>
          <h1 style={{fontSize:'35px',marginBottom:'80px',fontWeight:'700'}}> Sign Up</h1>
              <TextField
                  className='input'
                  id="input-with-icon-textfield"
                  InputProps={{
                      startAdornment: (
                          <InputAdornment className='icon' position="start">
                              <AccountCircle style={{ fontSize: '36px' }} />
                          </InputAdornment>
                      ),
                  }}
                  variant="standard"
                  onChange={(e) => { setName(e.target.value) }}
                  placeholder='Enter your name'
              />
              <TextField
                  className='input'
                  id="input-with-icon-textfield"
                  InputProps={{
                      startAdornment: (
                          <InputAdornment className='icon' position="start">
                              <MailOutlineIcon style={{ fontSize: '36px' }} />
                          </InputAdornment>
                      ),
                  }}
                  variant="standard"
                  onChange={(e) => { setEmail(e.target.value) }}
                  placeholder='enter yure email'
              />
                            <TextField
                  className='input'
                  id="input-with-icon-textfield"
                  InputProps={{
                      startAdornment: (
                          <InputAdornment className='icon' position="start">
                              <LockIcon style={{ fontSize: '36px' }} />
                          </InputAdornment>
                      ),
                  }}
                  variant="standard"
                  onChange={(e) => { setPassword(e.target.value) }}
                  placeholder='Ente your password'
              />
                                          <TextField
                  className='input'
                  id="input-with-icon-textfield"
                  InputProps={{
                      startAdornment: (
                          <InputAdornment className='icon' position="start">
                              <LockIcon style={{ fontSize: '36px' }} />
                          </InputAdornment>
                      ),
                  }}
                  variant="standard"
                  onChange={(e) => { setPasswordConfirmation(e.target.value) }}
                  placeholder='Enter password Confirmation'
              />
              <div style={{ display: 'flex', justifyContent: 'space-between' ,width:'60%',marginBottom:'200px'}}>
                  <Button className='button' onClick={() => { chackAndAddProps(name, password, passwordConfirmation, email) }} variant="contained">sign Up</Button>
                  <Button className='button' onClick={() => { nav('/signIn') }} variant="outlined">Sign In</Button>
              </div>

              <div className='down'>
                  <MailOutlineIcon className='iconDown' />
                  <YouTubeIcon className='iconDown' />
                  <FacebookIcon className='iconDown' />
                  <InstagramIcon className='iconDown' />
                  <TwitterIcon className='iconDown' />
                  <TikTokIcon className='iconDown' />
              </div>
          </div>
      </div>
  )
}
