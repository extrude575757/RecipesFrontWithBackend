import React, {useEffect,useState} from "react";
// import TitlePass2 from "../../common/TitlePass2";
import TitlePass1 from './TitlePass1';
import { connect } from "react-redux";
import {Title} from "../title";
// import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../../actions/titleActions";



const TitlePass =(props)=>{
  const {title2,handleChanges} = props;
  useEffect(()=>{
    console.log(props );
},[{}]);


    return(
        <TitlePass1  setTitle={setTitle} title2={props.title2} handleChanges={props.handleChanges} />
    )
}


const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass);
  
 


