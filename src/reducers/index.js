import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { recipesReducer } from "./recipesReducer";
import { credReducer }  from "./credReducer";
export default combineReducers({ titleState: titleReducer, recipesReducer,credReducer });
