import React from "react";
// import titlepass2 from "../../common/titlepass2";
import {TitlePass1jsx} from "../../common/";
import {TitlePass2jsx} from "../../common/";
import {TPEE2} from '../../common/'
import TitlePass from './TitlePass';
import { connect } from "react-redux";
import {Title}  from "../title";
import { toggleEditing, setTitle } from "../../../state/actions/titleActions";

const TitlePass1 =({...props})=>{
  const {editing,title2,setTitle,setEdit,toggleEditing} = props;

return(
    <div>
    <label for='category'>
          Category 
        </label>
    {editing !== undefined && props.title2 !== undefined&& 
    editing === true && props.editing !== undefined && props.editing === editing ? (
      // <h1>
      //   {props.title2}{" "}
      //   <i
      //     className="far fa-edit"
      //     onClick={() => {
      //       props.toggleEditing();
      //     }}
      //   />
      // </h1>
      // <TitlePass2jsx />,
      // < TPEE2 />
<div>
      {/* <input
      className="title-input"
      type="text"
      name="newTitleText"
      value={title2}
      onChange={props.handleChanges}
    />
    <button
      onClick={()=>{ toggleEditing(); 
      
        setTitle(title2)
        // setEdit(editing);
      }}
    >
      Update title
    </button> */
    

    }
        <TitlePass2jsx/>
  </div>
    ) : editing !== undefined && props.title2 !== undefined&& editing === false
     && props.editing !== undefined  && props.editing === editing && (
      <TitlePass1jsx  />
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
  
 