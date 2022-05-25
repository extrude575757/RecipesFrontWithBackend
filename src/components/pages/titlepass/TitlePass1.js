import React from "react";
import TitlePass2 from "../../common/TitlePass2";
import TitlePass1jsx from "../../common/TitlePass1jsx";
import TitlePass from './TitlePass';
import { connect } from "react-redux";
import {Title}  from "../title";
import { toggleEditing, setTitle } from "../../../actions/titleActions";

const TitlePass1 =({...props})=>{
  const {editing} = props;

return(
    <div>
    <label for='category'>
          Categoryaaa
        </label>
    {editing !== undefined && props.title2 !== undefined&& editing === false ? (
      // <h1>
      //   {props.title2}{" "}
      //   <i
      //     className="far fa-edit"
      //     onClick={() => {
      //       props.toggleEditing();
      //     }}
      //   />
      // </h1>
      <TitlePass1jsx />
    ) : (
      <TitlePass2  />
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
  
 