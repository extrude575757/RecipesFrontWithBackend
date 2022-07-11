import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import SignupR  from "./SignupR";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import {credSignup,addNewCred } from '../../../actions/credActions'; 
const Signup = ({...props} ) => {
  const {credentials} = props;
  const [ credd, setNewCredd] = useState({
    credentials:[{
        id:0,
      username: '',
      password: '',
      department: 'Nah Deps',
      role:1
    } ]     ,
    isFetching:false,
    error:''
  });






    // const login = e => {
    //     e.preventDefault();
    //     axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/register", credentials)
    //       .then(res => {
    //         console.log('bk: Login.js: login: res: ', res)
    //         localStorage.setItem('token', res.config.data)
    //         props.history.push('/protected')
    //       })
    //       .catch(err => {
    //         console.error(err.response)
    //       })
    //   };
  //   const [ credd, setNewCredd] = useState({

  //     credentials:{id:0,
  //     username: username,
  //     password: password,
  //     department: department,
  //     role:1},
  //     isFetching:false,
  //     error:''

      
  // });




  useEffect(()=>{

    if(credd === undefined && credentials !== undefined){
      credd = {
          ...credentials,
          [credentials.target.name]: credentials.target.value}
          addNewCred(credd);
        console.log('credsineffc'+credd.role);  
    } else if(credentials === undefined && credd !== undefined){
      credentials = {
        ...credd,
        [credd.target.name]: credd.target.value}
        addNewCred(credd);
      console.log('credsin1 '+credentials +props.credd);  
    } else if(credentials === undefined && credd === undefined){
      <Signup />
    } 
    // else if(credentials !== undefined && credd !== undefined)
    else{
      addNewCred(credd);
    }

  },[{credd},credentials]);








  const {username,department,password,role} = credentials ;

  const handleSubmit = (e) => {
    e.preventDefault();
    props.credSignup(credd.credentials);
    console.log('submit state'+credd) ;
    push('/login/');
}


  const  handleChange = e => {
    setNewCredd({
        ...credd.credentials,
        [e.target.name]: e.target.value
    });
    console.log('hand'+credd.department)
    addNewCred(credd);
  };
  const  handleValue = e => {
    
    console.log('right')
    addNewCred(credd);
  }

  const handleInputChange=(e)=> {
    const target = e.target;
    console.log('hdlIval '+ credd.username);
    // console.log('crdr '+ credd.role);
    const value =  target.value;
    const name = target.name;
          setNewCredd({
            ...credd,
            [name]: value
           });
     
  
       console.log('newname '+ credd.username + credd.department+ '   ' + props.credentials.username);
  };

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




  // useEffect(()=>{
  //   if(credd === undefined){
  //     console.log('props signup container ',props);
  //   }else{
  //     console.log('props signup container2 ',props);
  //   }
  //   // if(credd === undefined && credentials !== undefined){
  //   //   credd = {
  //   //       ...credentials,
  //   //       [credentials.target.name]: credentials.target.value}
  //   //       // addNewCred(credd);
  //   //     console.log('credsn'+credentials.username);  
  //   // } else if(credentials === undefined && credd !== undefined){
  //   //   // credentials = {
  //   //   //   ...credd,
  //   //   //   [credd.target.name]: credd.target.value}
  //   //     addNewCred(credd);
  //   //   console.log('credsi'+credentials);  
  //   // } else if(credentials === undefined && credd === undefined){
  //   //   <Signup />
  //   // } else if(credentials !== undefined && credd !== undefined){
  //   //   addNewCred(credd);
  //   //   <SignupR />
  //   //   console.log('crein'+props.credentials.username);  
  //   // }

  // },[{}]);


    
        return (
          <SignupR  /> 
        );
      }
  

const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials,
    credSignup: state.credReducer.credSignup
  };
};


export default connect(mapStateToProps, { credSignup,addNewCred  })(Signup);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
