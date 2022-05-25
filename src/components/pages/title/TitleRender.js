import React, { useState } from "react";
import { connect } from "react-redux";
// import {TitlePass} from "../titlepass";
import {TitlePass2} from "../../common"
import { TitlePass1jsx } from "../../common";
import { TitlePass } from "../titlepass";
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
       { <TitlePass1jsx  />
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
      <TitlePass2 />
  
      </div>
    )
  }


  return(
   <>
    {editing !== undefined && editing !== true ? (
             <h1>
             {props.title2}{editing}
             <i
               className="far fa-edit"
              onClick={()=>{
                 toggleEditing()
               }}
             />
           </h1>

    ) : editing !== undefined && editing  === false && (
      <TitlePass2  />
    


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
  