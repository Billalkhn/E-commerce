
import React from 'react'
import { Route , Switch } from 'react-router-dom';
import HomePage from './pages/Homepage/Hompage';
import HatsPage from './pages/Hats/hats';




function App() {  
  return ( 
     <div>
       <Switch>
       <Route exact={true} path='/' component={HomePage} />
       <Route exact={true} path='/shop/hats' component={HatsPage} />
       </Switch>
     </div>
 
    );
}

export default App;
