import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import TitleRender  from "./TitleRender";
import TitlePass from "../titlepass"
import { toggleEditing, setTitle } from "../../../state/actions/titleActions";
import { AppComp } from "../../common";

// import { initialState, titleReducer } from "../reducers/titleReducer";

const Title = (props ) => {


  const {editing,title2} = props;
  const [newTitleText, setNewTitleText] = useState('');
  // const [state, dispatch] = useReducer(titleReducer, initialState);
  // console.log(state);

  const [edit,setEdit] = useState(false);

  const handleChanges = (e) => {
    

    if(newTitleText !== undefined ){
      const nt = newTitleText+e.target.value;
      console.log('fff'+nt);
      setNewTitleText( e.target.value);

    }else if(newTitleText === undefined){
      setNewTitleText( e.target.value);
    }
  };
    useEffect(()=>{
        if(edit !== undefined && props !== undefined ||  
          props.editing === undefined && props !== undefined){ 
          if (props.editing === undefined && edit !== undefined&& props.title2 !== undefined && newTitleText !== undefined){
            console.log(newTitleText + props.title2, edit);
            if(props.title2.length !== newTitleText.length && props.title2.length > newTitleText.length){
              title2 = newTitleText
            }
            props.editing = edit;
            setTitle(newTitleText);
            setEdit(!edit)
          }
          if (props.editing === undefined && edit !== undefined&& props.title2 === undefined){
            <TitleRender handleChanges={handleChanges}  />
          }
        }
    },[{edit,newTitleText}]);

  return (
     <TitleRender handleChanges={handleChanges}  />
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
