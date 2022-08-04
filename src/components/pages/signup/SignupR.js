import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import signup  from "./signup";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import Formcomp  from "../../common/Formcomp";
import {credSignup,addNewCred,addcred, GET_CREDS_FAIL } from '../../../state/actions/credActions'; 
import CredComp from "./CredComp";

const SignupR = ({...props}) => {




  const {credentials,isFetching,error} = {...props};

  const {id,username,password,department,role} = {...credentials};
  // const {id,username,department,password,role} = cred.credentials[0] ;
  const [ credd, setNewCredd] = useState({
    credentials:[{
        id:0,
      username: username ||' ',
      password: ' ',
      department: 'Nah Deps',
      role:1
    } ]     ,
    isFetching:false,
    error:''
  });


const credsif = () =>{
  try{
    if(credentials !== undefined && props !== undefined && credd.credentials !== undefined){
      console.log('credsin1 '+credentials +credd.credentials + props); 
      
        addNewCred(credd.credentials); 
    }
  }catch(e){
    console.log(e);
  }
}

  useEffect(()=>{

    try{
      if(typeof credd !== undefined ){

      
        credsif({...credd.credentials[0]});
      } else if(typeof credentials === undefined && credd !== undefined){
       credentials = {...credd};
       console.log(isFetching)
     
      } 
      // else if(credentials !== undefined && credd !== undefined)
      else{
        setNewCredd({
          credentials:[{
              id:0,
            username: username | ' ',
            password: ' ',
            department: 'Nah Deps',
            role:1
          } ]     ,
          isFetching:false,
          error:''
        })
  
      }
    }catch(e){
      console.log(e);
    }

  },[{credd}]);






  const handleSubmit = (e,value) => {
    isFetching = true;

   
    console.log('the'+isFetching)

    credentials.username= value.username
    props.submitit(e,value)
   
}

  const  handleChange = e => {
    setNewCredd({
        ...credd.credentials,
        [e.target.name]: e.target.value
    });
    console.log('hand'+credd)
    addNewCred(credd);
  };
  const  handleValue = e => {
    
    console.log('right')
    addNewCred(credd);
  }

  const handleInputChange=(e,n)=> {
    if (isFetching === false){
      const target = e.target;
    
    // console.log('crdr '+ credd.role);
    const value =  target.value;
    const name = target.name;
          setNewCredd({
            ...credd,
            [name]: value
           });
           console.log('hdlIval '+ credd.isFetching);
  console.log(n.username, ' nex', credd.username);
  props.cred = {
    ...credd,
    [name]: value
   }
       console.log('newname cred'+ props.cred.username, ' oldname credd' +
       credd.username + 
       credd.department+ '   ' + credd.password + ' ',isFetching);
    }else{
      console.log('gonetrue')
      isFetching = true;
      handleSubmit(e);
    }
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
          (typeof credd !== undefined &&
          isFetching) ? <signup credd={credd} /> : <Formcomp isFetching={isFetching} credentials={credentials}credd={credd}handleSubmit={handleSubmit} handleInputChange={handleInputChange}   /> 
        );
      }
  

const mapStateToProps = ({...state}) => {
  return( {
    handleInputChange: state?.handleInputChange,
    cred: state?.credReducer?.cred,
    credentials: state?.credReducer?.cred?.credentials,
    credSignup: state?.credReducer?.credSignup,
    handleSubmit: state?.handleSubmit,
    isFetching: state.credReducer.isFetching,
    submitit: state.submitit
  });
};


export default connect(mapStateToProps, { credSignup,addNewCred,addcred  })(SignupR);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
