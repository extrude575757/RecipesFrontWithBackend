import React, {useEffect,useState} from "react";
// import TitlePass2 from "../../common/TitlePass2";
import TitlePass1 from './TitlePass1';
import { connect } from "react-redux";
import {Title} from "../title";
// import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../../actions/titleActions";



const TitlePass =(props)=>{
  const {title2,handleChanges,newTitleText} = props;
  const [newTitle, setNewTitle] = useState('');
  useEffect(()=>{
    if(newTitleText !== undefined || newTitle !== undefined){
      console.log('Titlepass' +newTitleText +' '+newTitle);
    }else{
      setNewTitle(title2);
    }
   
},[{title2}]);


    return(
        <TitlePass1  />
    )
}


const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass);
  
 


