
import React from 'react';
import { connect } from "react-redux";
// import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../actions/titleActions";
import {TitlePass} from "../pages/titlepass"
const TitlePass1jsx = ({...props})=>{
    const {editing,title2,setTitle} = props;



    return (
        <h1>
        {title2}
        {editing}
        <i
          className="far fa-edit"
          onClick={() => {
            // dispatch({ type: "TOGGLE_EDITING" })
            // debugger;
            props.toggleEditing();
          }}
        />
      </h1>
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
  
 