
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import  { default as App } from './App'; 
import AppComp from "./components/common/AppComp";
import Login from './components/pages/login/Login.js';
import {Signup} from './components/pages/Signup';
import Heading from './components/common/Heading';
import PrivateRoute from './components/pages/auth/PrivateRoute';
export const  App= () => {
    return (
      <Router>
        <div className="App">
          <Heading />
          <Switch>
            <PrivateRoute exact path="/protected" component={AppComp}/>
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Signup}/>
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;
  