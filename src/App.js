
import React from 'react'
import { Route , Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/Hompage';
import HatsPage from './pages/Hats/hats';
import ShopPAge from './pages/shop/shop';
import SignInSingUp from './pages/authPages/SignInSingUp';

import Header from './components/header/header';

import './App.css'




function App() {  
  return ( 
     <div>
       <Header/>
       <Switch>
       <Route exact={true} path='/' component={HomePage} />  
       <Route exact={true} path='/shop' component={ShopPAge} />
       <Route exact={true} path='/signin' component={SignInSingUp} />


       </Switch>
     </div>
 
    );
}

export default App;
