import React from 'react';
import { connect } from "react-redux";
// import TitleRender  from "./TitleRender";
import  {Title }from '../pages/title';
import { toggleEditing, setTitle } from "../../actions/titleActions";

const TitlePass2jsx = ( {...props}) =>{
    const {editing,title2,setTitle,setNewTitle} = props;

return(
    editing &&  <div>
        
    <input
      className="title-input"
      type="text"
      name="newTitleText"
      value={title2}
      onChange={props.handleChanges}
    />
    <button
      onClick={()=>{
        setTitle(setNewTitle);
        setEdit(false);
        toggleEditing();
        
      }}
    >
      Update title
    </button>
  </div>&&<Title />


)
}


const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass2jsx);
  
 