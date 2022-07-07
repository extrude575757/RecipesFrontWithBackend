import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import SignupR  from "./SignupR";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import {addNewCred,credSignup } from '../../../actions/credActions'; 
const Signup = (props ) => {
  const {credentials} = props;
  const [ credd, setNewCredd] = useState({
    creds:{
      id:0,
    username: '',
    department: 'No Dep',
    password: '',
    role:1,
    isFetching:false,
    error:''
    }      
  });
const  handleChange = e => {
    setNewCredd({
        ...credd.creds,
        [e.target.name]: e.target.value
    });
    console.log('hand'+credd.department)
    addNewCred(credd);
  };
  const  handleValue = e => {
    
    console.log('right')
    addNewCred(credd);
  }

  const login = e => {

    e.preventDefault();
    handleValue(credd);
    console.log(department)
    axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/register", credentials)
      .then(res => {
        console.log('bk: Login.js: login: res: ', res)
        localStorage.setItem('token', res.config.data)
        props.history.push('/protected')
      })
      .catch(err => {
        console.error(err.response)
      })
  };




  useEffect(()=>{

    if(credd === undefined && credentials !== undefined){
      credd = {
          ...credentials,
          [credentials.target.name]: credentials.target.value}
          // addNewCred(credd);
        console.log('credsn'+credentials.username);  
    } else if(credentials === undefined && credd !== undefined){
      // credentials = {
      //   ...credd,
      //   [credd.target.name]: credd.target.value}
        addNewCred(credd);
      console.log('credsi'+credentials);  
    } else if(credentials === undefined && credd === undefined){
      <Signup />
    } else if(credentials !== undefined && credd !== undefined){
      // addNewCred(credd);
      <SignupR />
      console.log('crein'+credentials.username);  
    }

  },[{credd,credentials}]);


    
        return (
         <SignupR />
        );
      }
  

const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials
  };
};


export default connect(mapStateToProps, { addNewCred,credSignup  })(Signup);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
