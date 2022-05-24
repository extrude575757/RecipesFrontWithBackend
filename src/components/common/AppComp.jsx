import React from 'react';

import Title from "../pages/title/Title";
import List from "../pages/list/List";
// import { titleReducer } from "./reducers/titleReducer";
// import { recipesReducer } from "./reducers/recipesReducer";
// import rootReducer from "./reducers";
import Nav from "../pages/navbar/Nav"
import CardAdd from "../pages/add/CardAdd";
const AppComp = ( ) =>{


    return(
        <div  className="App">
        <Nav/>
        <Title/>
        <List/>
        <CardAdd/>
      </div>
    );
}


export default (AppComp);