import React from 'react';
import { connect } from "react-redux";
// import TitleRender  from "./TitleRender";
import  {Title }from '../pages/title';
import { toggleEditing, setTitle } from "../../state/actions/titleActions";

const TitlePass2jsx = ( {...props}) =>{
    const {editing,title2,setTitle} = props;

    const handleChanges = (e) => {
    

      if(title2 !== undefined ){
        const nt = title2+e.target.value;
        console.log('fff'+nt);
        setTitle( e.target.value);
  
      }else if(title2 === undefined){
        setTitle( e.target.value);
      }
    };

return(
    editing &&  <div>
        
    <input
      className="title-input"
      type="text"
      name="newTitleText"
      value={title2}
      onChange={handleChanges}
    />
    <button
      onClick={()=>{
        // setTitle(title2);
        // setEdit(false);
        toggleEditing();
        
      }}
    >
      Update title
    </button>
  </div>
  
  // &&<Title />


)
}


const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass2jsx);
  
 