import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
// import TodoIndex from "./editForm/TodoIndex"
import Title from "./components/pages/title/Title";
import List from "./components/pages/list/List";
// import { titleReducer } from "./reducers/titleReducer";
// import { recipesReducer } from "./reducers/recipesReducer";
import rootReducer from "./reducers";
import Nav from "./components/pages/navbar/Nav"
import CardAdd from "./components/pages/add/CardAdd";
import AppComp from "./components/common/AppComp"
import "./styles.css";
// import TodoIndex from "./editForm/TodoIndex";
import Heading from "./components/common/Heading"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/pages/login/Login.js';
import Register from './components/pages/register/Register.js'
import PrivateRoute from './components/pages/auth/PrivateRoute';



// function AppComp() {
//   return (
//     <div  className="App">
//       <Nav/>
//       <Title/>
//       <List/>
//       <CardAdd/>
//     </div>
//   );
// }


function App() {
  return (
    <Router>
      <div className="App">
        <Heading />
        <Switch>
          <PrivateRoute exact path="/protected" component={AppComp}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log(`preve state: `, store.getState());
  console.log(`action: `, action);
  next(action);
  console.log("new state: ", store.getState());
  console.groupEnd();
};

const store = createStore(rootReducer, applyMiddleware(logger));



const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider  store={store}>
    <App  />
  </Provider>,
  rootElement
);
