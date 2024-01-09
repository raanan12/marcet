import './App.css';
import React,{useState} from 'react';
import {BrowserRouter,Routes,Route,useNavigate} from 'react-router-dom'
import {Data1} from './contextApi'
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import MainPage from './component/MainPage';
import PageBuy from './component/PageBuy';
import ShowBuyAfthr from './component/ShowBuyAfthr';
import PageUser from './component/PageUser';



function App() {
    return (
  <div className="App">
    <Data1>
      <BrowserRouter>
         <Routes>
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/' element={<MainPage/>}/>
          <Route path='/pageBuy' element={<PageBuy/>}/>
          <Route path='/From' element={<ShowBuyAfthr/>}/>
          <Route path='/pageUser' element={<PageUser/>}/>
         </Routes>
      </BrowserRouter>
    </Data1>
    </div>
  );
}

export default App;
