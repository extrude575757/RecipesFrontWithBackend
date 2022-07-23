import React from 'react';
import { connect } from "react-redux";
// import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../state/actions/titleActions";
import {TitlePass} from "../pages/titlepass";
const TitlePass2 = ( {...props}) =>{
    const {editing,title2,setTitle} = props;

return(
  //   <div>
        
  //   <input
  //     className="title-input"
  //     type="text"
  //     name="newTitleText"
  //     value={title2}
  //     onChange={props.handleChanges}
  //   />
  //   <button
  //     onClick={   setTitle(title2)}
  //   >
  //     Update title
  //   </button>
  // </div>

  <TitlePass />
)
}


const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass2);
  
 