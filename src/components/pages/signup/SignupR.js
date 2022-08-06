import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import Signup  from "./Signup";
import axiosWithAuth from '../../../utils/axiosWithAuth';
import Formcomp  from "../../common/Formcomp";
import {credActs } from '../../../state/actions'; 
import CredComp from "./CredComp";
import PropTypes from 'prop-types';
const SignupR = ({...props}) => {

const {value} = {...props}
  const [val,setValue] = useState({
    id:46,
    username: ' f', 
    password: 'padnma',
    department:  'No Dep',
    role:1
})


  const {credentials,error,cred} = {...props};
const {isFetching}= {...cred}
  const {id,username,password,department,role} = {credentials};
  // const {id,username,department,password,role} = cred.credentials[0] ;
  const [ credd, setNewCredd] = useState({
    credentials:[{
        id:0,
      username: value?.username ||'ffa ',
      password: value?.password    || ' ',
      department:  value?.department !== undefined && value.department || 'Nah Deps',
      role:1
    } ]     ,
    isFetching:false,
    error:''
  });


const credsif = () =>{
  try{
    if(credentials !== undefined && props !== undefined && credd !== undefined){
      setNewCredd( {credentials:{username:'tom'}})
      console.log('credsin1 '+credentials.username ,credd.credentials[0].username); 
      
        // addNewCred(credd.credentials); 
    }
    throw{
      CredComp
       
      
    }
  }catch(e){
    console.log(e);
  }
}

  useEffect(()=>{

    try{
      if(typeof credd !== undefined ){

        console.log(isFetching)
        credsif();
      } else if(typeof credentials === undefined && credd !== undefined){
      
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
    // isFetching = true;
    credd.isFetching = true;
    handleChange({...value});
    // addNewCred(value);
    console.log('the'+value.username + value.password)
    if(credd.isFetching){
      console.log('hand'+credd.credentials)
    addNewCred({...value});
    login(e,value);
    }
    // credentials.username= value.username
    // props.submitit(e,value)
   
}

  const  handleChange = value => {
    if(typeof value !== undefined){
      setNewCredd({
        ...credd?.credentials,
        [value?.target?.name]: value?.target?.value
    });
    
    }
  };
  const  handleValue = e => {
    
    console.log('right')
    addNewCred(credd);
  }

  const handleInputChange=(e,n)=> {
    if (isFetching === false && typeof n !== undefined){
      const target = e.target;
    
    // console.log('crdr '+ credd.role);
    const value =  target.value;
    const name = target.name;
          setNewCredd({
            ...credd.credentials,
            [n?.target?.name]: n?.target?.value
           });
           console.log('hdlIval '+ credd.isFetching);
  console.log(n.username, ' nex', n.username);
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

  const login = (e,v) => {

    e.preventDefault();
    handleValue(v);
    console.log(v.department)
    axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/register", v)
      .then(res => {
        console.log('bk: Login.js: login: res: ', res)
        localStorage.setItem('token', res.config.data)
        props.history.push('/protected')
      })
      .catch(err => {
        console.error(err)
      })
  };

const signed = () =>{
  (typeof credd === undefined ||
    typeof isFetching === undefined) ? <Signup credd={credd} /> : 
    <CredComp value={val} isFetching={isFetching} credentials={credentials} credd={credd} handleSubmit={handleSubmit} handleInputChange={handleInputChange}   /> 
}
    
        return (
          <CredComp />
        );
      }
  





export default connect(
  state => ({
    handleInputChange: state.handleInputChange,
    value: state.value,
    cred: state.credReducer,
    credentials: state.credReducer.credentials[0],
    handleSubmit: state.handleSubmit,
    isFetching: state.credReducer.isFetching,
    submitit: state.submitit
  }), 
  {credSignup:credActs.credSignup,
    addNewCred:credActs.addNewCred,
    addcred:credActs.addcred,
    addCred:credActs.addCred}
)(SignupR)

SignupR.propTypes = {
  credentials: PropTypes.object,
  isFetching: PropTypes.bool,
  


}

// const hocThatWillConnectTitleToReduxStore = connect(mapStateToProps, {});
// const componentThatHasTitleConnectedToReduxStore = hocThatWillConnectTitleToReduxStore(
//   Title
// );
// export default componentThatHasTitleConnectedToReduxStore;
