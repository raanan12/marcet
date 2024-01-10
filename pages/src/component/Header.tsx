import React,{useState,useEffect,useContext} from 'react';
import {useNavigate} from'react-router-dom'
import {AllData} from '../contextApi'
import { Box, Typography, IconButton, Alert } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const Header = (props:any) => {
  const nav = useNavigate()
  const [search,setSearch]=useState<string>('')
  const [amountProduct,setAmountProduct]=useState<number>()
  const AllData1 = useContext(AllData)
  // Update the amount of products, according to the user's choice
  useEffect(()=>{
    let sum:number = 0
    AllData1?.choseProduct.forEach((val)=>{
      sum += val.cunt
    })
    setAmountProduct(sum)
  },[AllData1?.choseProduct])

  // Update the array of products the user sees, according to the user's search
  useEffect(()=>{
    AllData1?.search(search)
  },[search])


  //Check if there is a logged-in user, if so, displays the logged-in user, if not displays the options either log in or register
  const signShow = ()=>{
    let a:any = AllData1?.userConect.name.length
    if(a < 1){
      return (
        // show options (sign in / sign up)
        <div style={{ display: 'flex', marginLeft: "10px", alignItems: 'center', borderLeft: 'gray 2px solid', paddingLeft: '10px' }}>
          <p style={{cursor:'pointer'}} onClick={() => { nav('/signIn') }}> sign in / </p>
          <p style={{cursor:'pointer'}} onClick={() => { nav('/signUp') }}>{' sign up '}</p>
          <AccountCircleRoundedIcon sx={{ fontSize: '2rem', marginLeft: '5px' }} />
        </div>
      )
    }
    else{
      // show logged-in user
      return (
        <div onClick={()=>{nav('/pageUser')}} style={{ display: 'flex', marginLeft: "10px", alignItems: 'center', borderLeft: 'gray 2px solid', paddingLeft: '10px' }}>
          <p>{AllData1?.userConect.name}</p>
          <AccountCircleRoundedIcon sx={{ fontSize: '2rem', marginLeft: '5px' }} />
        </div>
      )
    }
  }

  // show input search 
  const show1 = ()=>{
    if(props.show == true){
      return <Box sx={{ display: 'flex', alignItems: 'center', margin: 5, borderRadius: 100, width: 590, background: "white", padding: 0 }}>
        <SearchIcon sx={{ paddingLeft: 1 }} fontSize='large' />
        <input onChange={(e) => { setSearch(e.target.value) }} style={{ paddingLeft: '10px', fontSize: '1.2rem', border: 'none', borderLeft: "1px black solid", width: 540, height: 40, borderTopRightRadius: 100, borderBottomRightRadius: 100 }} type="text" />
      </Box>
    }
  }


//If the user wants to go to a buy page, check if products are selected, if not show a message about it
  const goToC = ()=>{
    let len:any = AllData1?.choseProduct.length
    if(len > 0 ){
      nav('/pageBuy')
    }
    else{
      alert('no choss product')
    }
  }


  return (
    <div style={{backgroundColor: '#212121',display:'flex',flexDirection:'column',alignItems:'center'}}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: '#212121', color: 'white', boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.2)' ,width:'100%'}}>
        <div style={{display:'flex',alignItems:'center'}}>
        <IconButton
          onClick={goToC}
          sx={{ fontSize: '30rem', backgroundColor: 'transparent', color: 'white', border: 'none', }}>

          <ShoppingCartIcon sx={{ fontSize: '3rem' }} />

        </IconButton>
        <div style={{background:"gray",display:'flex',alignItems:'center',justifyContent:'center',width:'40px',height:'40px',borderRadius:'50%'}}>
          <p style={{fontWeight:'bold',fontSize:'23px'}}>{amountProduct}</p>
        </div>
          {signShow()}
        </div>

        <Typography style={{paddingRight:'20px'}} variant="h4" component="h1"> GlobalMallOnline </Typography>

        <IconButton
        onClick={() => {nav('/')}}
          sx={{
            fontSize: '2rem',
            backgroundColor: 'transparent', // רקע שקוף
            color: 'white',
            border: 'none',
          }}
        >
          <HomeIcon sx={{ fontSize: '3rem' }} />
        </IconButton>
      </Box>
      {show1()}
    </div>
    
  );
};

export default Header;
