import React from "react";
import TitlePass2 from "../../common/TitlePass2";
// import TitlePass from './TitlePass';
import { connect } from "react-redux";
// import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../../actions/titleActions";

const TitlePass1 =({...props})=>{

return(
    <div>
    <label for='category'>
          Category
        </label>
    {editing === true ? (
      <h1>
        {props.title2}{" "}
        <i
          className="far fa-edit"
          onClick={() => {
            // dispatch({ type: "TOGGLE_EDITING" })
            // debugger;
            props.toggleEditing();
          }}
        />
      </h1>
    ) : (
      <TitlePass2 title2={title2} setTitle={setTitle}/>
    )}
  </div>
)
}


const mapStateToProps = ({ titleState }) => {
    return {
      title2: titleState.title,
      editing: titleState.editing
    };
  };
  
  
  export default connect(mapStateToProps, { toggleEditing, setTitle })(TitlePass1);
  
 