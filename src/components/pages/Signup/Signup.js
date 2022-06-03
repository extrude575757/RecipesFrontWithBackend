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
        department: 'NoDep',
        password: '',
        role:1
      }
  });
const  handleChange = e => {
    setNewCredentials({
     
        ...credentials,
        [e.target.name]: e.target.value
      
    });
  };





    useEffect(()=>{

      if(credentials !== undefined && props.creds !== undefined){
        if(props.creds.length < credentials.length){
          console.log('creds'+creds);
            props.creds = {
              ...state.credentials,
              [state.target.name]: state.target.value}
              addNewCred(credentials);
          
        }else if(props.creds.length > credentials.length){
          credentials = {
            ...creds,
            [creds.target.name]: creds.target.value}
            addNewCred(credentials);
        }
      }else{
        <SignupR handleChange={handleChange} />
      }

    },[{credentials,creds}]);


    
        return (
         <SignupR handleChange={handleChange} />
        );
      }
  

const mapStateToProps = (state) => {
  return {
    creds: state.credReducer.credentials
  };
};


export default connect(mapStateToProps, { addNewCred  })(Signup);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
