import React, {useEffect,useState} from "react";
// import TitlePass2 from "../../common/TitlePass2";
import TitlePass1 from './TitlePass1';
import { connect } from "react-redux";
import {Title} from "../title";
// import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../../actions/titleActions";



const TitlePass =({...props})=>{
  const {title2} = props;
  const [newTitle, setNewTitle] = useState('');
  const handleChanges = (e) => {
    

    if(newTitle !== undefined ){
      const nt = newTitle;
      console.log('fff'+nt);
      // setNewTitle( e.target.value);
      setNewTitle(e);

    }else if(newTitle === undefined){
      <TitlePass1 />
    }
  };

  useEffect(()=>{
    if(newTitle !== undefined || newTitle !== undefined){
      handleChanges(newTitle);
      console.log('Titlepass' +newTitle+' '+newTitle);
    }else{
      handleChanges(newTitle);
      setNewTitle(title2);
    }
   
},[{newTitle}]);


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
  
 


