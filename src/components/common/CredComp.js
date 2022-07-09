import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Signup} from "../pages/signup";
import {Submit} from '../pages/submit';
const CredComp =(props) =>{
  const {credentials,handleInputChange,handleSubmit} = props;
  const {username,password,department,role} = credentials;
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
    const [ credd, setNewCredd] = useState({

      credentials:{id:0,
      username: username,
      password: password,
      department: department,
      role:role},
      isFetching:false,
      error:''

      
  });




  // useEffect(()=>{

  //   if(credd === undefined && credentials !== undefined){
  //     credd = {
  //         ...credentials,
  //         [credentials.target.name]: credentials.target.value}
  //         addNewCred(credd);
  //       console.log('credsin1'+credd.role);  
  //   } else if(credentials === undefined && credd !== undefined){
  //     credentials = {
  //       ...credd,
  //       [credd.target.name]: credd.target.value}
  //       addNewCred(credd);
  //     console.log('credsin1 '+credentials +props.credd);  
  //   } else if(credentials === undefined && credd === undefined){
  //     <Signup />
  //   } else if(credentials !== undefined && credd !== undefined){
  //     addNewCred(credd);
  //   }

  // },[credd]);
  // useEffect(()=>{
  //   if(handleSubmit === undefined){
  //     console.log('handleSubmit is undefined')
  //   }else{
  //     <Submit />
  //   }
  // })
    return (
 

<Submit /> 


   
    )


}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials
  };
};


export default connect(mapStateToProps, { })(CredComp);

 