import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import SignupR  from "./SignupR";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import {addNewCred } from '../../../actions/credActions'; 
const Signup = (props ) => {
  const {creds} = props;
  const [ credentials, setNewCredentials] = useState(    {
      credentials:    {
        username: '',
        department: 'No Dep',
        password: '',
        role:1
      }
  });
const  handleChange = e => {
    setNewCredentials({
      credentials: {
        ...state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };





    // useEffect(()=>{
    //     if(edit !== undefined && props !== undefined ||  
    //       props.editing === undefined && props !== undefined){ 
    //       if (props.editing === undefined && edit !== undefined&& props.title2 !== undefined && newTitleText !== undefined){
    //         console.log(newTitleText + props.title2, edit);
    //         if(props.title2.length !== newTitleText.length && props.title2.length > newTitleText.length){
    //           title2 = newTitleText
    //         }
    //         props.editing = edit;
    //         setTitle(newTitleText);
    //         setEdit(edit)
    //       }
    //       if (props.editing === undefined && edit !== undefined&& props.title2 === undefined){
    //         <TitleRender handleChanges={handleChanges}  />
    //       }
    //     }
    // },[{edit,newTitleText}]);


    
        return (
         <SignupR  />
        );
      }
  

const mapStateToProps = (state) => {
  return {
    creds: state.credReducer.creds
  };
};


export default connect(mapStateToProps, { addNewCred })(Signup);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
