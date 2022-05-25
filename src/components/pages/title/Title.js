import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import TitleRender  from "./TitleRender";
import { toggleEditing, setTitle } from "../../../actions/titleActions";
import { AppComp } from "../../common";

// import { initialState, titleReducer } from "../reducers/titleReducer";

const Title = ({...props}) => {
  const [newTitleText, setNewTitleText] = useState();
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log(state);

  const [edit,setTitle] = useState(false);

  const handleChanges = (e) => {
    setNewTitleText(e.target.value);
  };
    useEffect(()=>{
        if(newTitleText !== undefined){
          console.log(newTitleText );
          console.log(edit);
          setNewTitleText(true);
        }else if(props.edit){
            // (edit ? setNewTitleText(newTitleText) : setNewTitleText(''))
          setNewTitleText(true);
        }
    },[{}]);

  return (
     <TitleRender setTitle={setTitle} title2={newTitleText} handleChanges={handleChanges} />
    
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
