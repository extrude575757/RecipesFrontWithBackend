import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import TitleRender  from "./TitleRender";
import TitlePass from "../titlepass"
import { toggleEditing, setTitle } from "../../../actions/titleActions";
import { AppComp } from "../../common";

// import { initialState, titleReducer } from "../reducers/titleReducer";

const Title = ({...props}) => {
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log(state);

  const [edit,setTitle] = useState(false);

  const handleChanges = (e) => {
    const nt = e.target.value;
    console.log(nt)
    setNewTitleText(e.target.value);
  };
    useEffect(()=>{
        if(edit !== undefined || props.editing === undefined){


          if (props.editing === undefined && edit !== undefined&& props.title2 !== undefined){
            console.log(newTitleText + props.title2, edit);
            props.editing = edit;
          }
          if (props.editing === undefined && edit !== undefined&& props.title2 === undefined){
            handleChanges();
          }
          
        }
    },[{edit,newTitleText}]);

  return (
     <TitleRender editing={props.editing}setTitle={setTitle} title2={newTitleText} handleChanges={handleChanges} />

    
  );
};
const mapStateToProps = ({ titleState }) => {
  return {
    title2: titleState.title,
    editing: titleState.editing
  };
};


export default connect(mapStateToProps, { toggleEditing, setTitle })(Title);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
