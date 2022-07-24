import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import SignupR  from "./SignupR";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import {credSignup,addNewCred, GET_CREDS_FAIL } from '../../../state/actions/credActions'; 
const Signup = ({...props}) => {




  const {cred} = {...props};

  const {credentials} = {...cred};
  // const {id,username,department,password,role} = cred.credentials[0] ;
  const [ credd, setNewCredd] = useState({
    credentials:[{
        id:0,
      username: ' ',
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
      
        addNewCred(credentials); 
    }
  }catch(e){
    console.log(e);
  }
}

  useEffect(()=>{

    if(credd !== undefined ){

      
      credsif({...credd.credentials[0]});
    } else if(credd === undefined){
     credentials = {...credd};
   
    } 
    // else if(credentials !== undefined && credd !== undefined)
    else{
      setNewCredd({
        credentials:[{
            id:0,
          username: ' ',
          password: ' ',
          department: 'Nah Deps',
          role:1
        } ]     ,
        isFetching:false,
        error:''
      })

    }

  },[credd]);







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
          !props.isFetching && <SignupR  /> 
        );
      }
  

const mapStateToProps = ({...state}) => {
  return( {
    handleInputChange: state.handleInputChange,
    cred: state.credReducer.cred,
    credentials: state.credReducer.credentials,
    credSignup: state.credReducer.credSignup,
    handleSubmit: state.handleSubmit
  });
};


export default connect(mapStateToProps, { credSignup,addNewCred  })(Signup);

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
