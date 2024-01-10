import React,{useContext,useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button/Button';
import {AllData} from '../contextApi';
import './styls/signIn.css';
import { AccountCircle } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TikTokIcon from '@mui/icons-material/VideoLabel';


export default function SignIn(props:any) {
  const nav = useNavigate();
  const AllData1 = useContext(AllData);  
  const [name,setName]=useState<string>('');
  const [password,setPassword]=useState<string>('');



//Check if the values entered by the user are valid. If they are, check if the user exists in the system. If so, define the user as logged in.
  const chackAndAddProps = async (name:string,password:string) =>{
    if(name.length < 3 || name.length > 8){
        alert('name is not valid');
    }
    else if(password.length <5 || password.length >9){
        alert('password not valid');
    }
    else{
        let result = await AllData1?.signIn(name, password)
        console.log(result);
        
        if(result){
            nav('/');
        }
        else{
            alert('the user not exist');
        }
    }
  }
 
  return (
     <div className='main'>

          <div className='part1'>
            <p className='title'>Welcome to GlobalMallOnline...</p>
              <p className='direction'>We are glad you chose to reconnect with us,
                  We are here to always give you the shopping experience from home in the most convenient and best way,
                  Our customer service team is at your disposal 24/7. You are welcome to contact us with anything you need
                  At GlobalMallOnline, we have made customer service our motto and we will be happy to hear from you about any problems that arise on the site.
                  Greetings GlobalMallOnline team</p>
            <div className='down'>
                <MailOutlineIcon className='iconDown'/>
                <YouTubeIcon className='iconDown'/>
                <FacebookIcon className='iconDown'/>
                <InstagramIcon className='iconDown'/>
                <TwitterIcon className='iconDown'/>
                <TikTokIcon className='iconDown'/>
            </div>
          </div>


          <div className='part2'>
              <h1 style={{fontSize:'35px',marginBottom:'80px',fontWeight:'700'}}> Sign In</h1>

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
              />
              <div style={{ display: 'flex', justifyContent: 'space-between' ,width:'60%',marginBottom:'200px'}}>
                  <Button className='button' onClick={() => { chackAndAddProps(name, password) }} variant="contained">sign in</Button>
                  <Button className='button' onClick={() => { nav('/signUp') }} variant="outlined">sign up</Button>
              </div>

          </div>


          
      </div>
  )
}
