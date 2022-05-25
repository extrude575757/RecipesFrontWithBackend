import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import TitleRender  from "./TitleRender";
import TitlePass from "../titlepass"
import { toggleEditing, setTitle } from "../../../actions/titleActions";
import { AppComp } from "../../common";

// import { initialState, titleReducer } from "../reducers/titleReducer";

const Title = (props ) => {
  const [newTitleText, setNewTitleText] = useState('');
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log(state);

  const [edit,setTitle] = useState(false);

  const handleChanges = (e) => {
    const nt = newTitleText+e.target.value;
    console.log(nt)
    if(newTitleText !== ''){
      setNewTitleText( e.target.value);

    }
  };
    useEffect(()=>{
        if(edit !== undefined && props !== undefined ||  
          props.editing === undefined && props !== undefined){
          if (props.editing === undefined && edit !== undefined&& props.title2 !== undefined && newTitleText !== undefined){
            console.log(newTitleText + props.title2, edit);
            if(props.title2.length !== newTitleText.length && props.title2.length > newTitleText.length){
              newTitleText =props.title2
            }
            props.editing = edit;
            setTitle(newTitleText);
          }
          if (props.editing === undefined && edit !== undefined&& props.title2 === undefined){
            handleChanges();
          }
        }
    },[{edit,newTitleText}]);

  return (
     <TitleRender editing={edit}setTitle={setTitle} title2={newTitleText} handleChanges={handleChanges} />
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
