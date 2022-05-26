
import React from 'react';
import { connect } from "react-redux";
import Title  from "../pages/title";
import TitlePass2jsx from './TitlePass2jsx';
import { toggleEditing, setTitle } from "../../actions/titleActions";
import {TitlePass} from "../pages/titlepass"
const TitlePass1jsx = ({...props})=>{
    const {editing,title2,setTitle,toggleEditing} = props;



    return (
        !editing  &&( <h1>
        {title2} 
        <i
          className="far fa-edit"
          onClick={() => {
            // dispatch({ type: "TOGGLE_EDITING" })
            // debugger;
            toggleEditing();
            setTitle(title2);
          }}
        />
      </h1>)
      
      // editing &&<TitlePass editing={editing} title2={title2}setTitle={setTitle} />
    )
}



const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass1jsx);
  
 