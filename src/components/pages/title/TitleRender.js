import React, { useState } from "react";
import { connect } from "react-redux";
// import {TitlePass} from "../titlepass";
import {TitlePass2} from "../../common"
import { TitlePass1 } from "../../common";
import { AppComp } from "../../common";
import { toggleEditing, setTitle } from "../../../actions/titleActions";
import { Title } from "./Title";

const TitleRender = ({...props}) =>{
    const {editing,title2,setTitle,handleChanges,toggleEditing} = props;
  const title11 = (e) =>{
    return(
      props.editing && <div>
      <label for='category'>
            Category
          </label>
       { <TitlePass1 handleChanges={handleChanges}title2={title2} setTitle={setTitle} editing={props.editing} />
  }
        </div>
    )
  }

  const title12 = () =>{
    return (
      <div>
      <label for='category'>
            Category
          </label>
      <TitlePass2 title2={props.title2} handleChanges={props.handleChanges} setTitle={props.setTitle}/>
  
      </div>
    )
  }


  return(
   <>
    {editing !== undefined && editing === false ? (
             <h1>
             {title2}{editing}
             <i
               className="far fa-edit"
              onClick={()=>{
                 toggleEditing()
               }}
             />
           </h1>

    ) : editing && (
      <TitlePass2 title2={props.title2} handleChanges={props.handleChanges} setTitle={props.setTitle} />
    


  )

  }
  </>
)}
const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitleRender);
  