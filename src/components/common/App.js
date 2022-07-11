
import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppComp from "./AppComp";
import Login from '../pages/login/Login.js';
import {Signup} from '../pages/signup';
import Heading from './Heading';
import PrivateRoute from '../pages/auth/PrivateRoute';
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
  