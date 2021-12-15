import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/dashboard/dashboard';
import Preferences from './components/preferences/preferences';


import  'bootstrap/dist/css/bootstrap.min.css';


function App() {


  return (
    <div className="wrapper">

      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
           <Dashboard/>
          </Route>
          <Route path="/preferences">
            <Preferences/>
          </Route>
        </Switch>
      </BrowserRouter>
      <div>
        <h1>Welcome to YuppieChef</h1>
      </div> 
    </div>
  );
}

export default App;
