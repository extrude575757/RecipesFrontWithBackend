import React, { useState } from "react";
import { connect } from "react-redux";
// import {TitlePass} from "../titlepass";
import {TitlePass2} from "../../common"
import { TitlePass1 } from "../../common";
import { AppComp } from "../../common";
import { toggleEditing, setTitle } from "../../../actions/titleActions";


const TitleRender = ({...props}) =>{
    const {editing,title2,setTitle} = props;
  
  return(
   <>
    {editing ? (
      <div>
      <label for='category'>
            Category
          </label>
        <TitlePass1 handleChanges={props.handleChanges}title2={title2} setTitle={setTitle} editing={props.editing} />

        </div>

    ) : (
      <div>
      <label for='category'>
            Category
          </label>
      <TitlePass2 title2={props.title2} handleChanges={props.handleChanges} setTitle={setTitle}/>

      </div>
    )}

  </>
  );
}
const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitleRender);
  