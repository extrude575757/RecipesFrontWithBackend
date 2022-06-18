import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import SignupR  from "./SignupR";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import {addNewCred,credSignup } from '../../../actions/credActions'; 
const Signup = (props ) => {
  const {credentials} = props;
  const [ credd, setNewCredd] = useState(    {


      id:0,
      username: '',
      department: 'No Dep',
      password: '',
      role:1,
      isFetching:false,
      error:''
  
      
  });
const  handleChange = e => {
    setNewCredd({
        ...credd,
        [e.target.name]: e.target.value
    });
  };
  const  handleValue = e => {
    setNewCredd({
        ...credd,
        [e.target.name]: e.target.value
    });
  }

  const login = e => {
    e.preventDefault();
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

      if(credd !== undefined && credentials !== undefined){
        if(props.credentials.length < credd.length){
          console.log('creds'+credd+ ' ' + credentials);
            credd = {
              ...credentials,
              [state.target.name]: state.target.value}
              addNewCred(credentials);
          
        }else if(props.credentials.length > credd.length){
          console.log('credsin'+credentials);
          credentials = {
            ...credd,
            [credd.target.name]: credd.target.value}
            addNewCred(credentials);
        }
      }else{
        credentials = {
          ...credd,
          [credd.target.name]: credd.target.value}
          //addNewCred(credentials);
        console.log('credsin'+credentials);
    
      }

    },[{credd}]);


    
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
