import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {creds } from '../../../state/actions'
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { Signup} from ".";
import Formcomp from "../../common/Formcomp"
const CredComp =({...props}) =>{
  const {cred,handleInputChange,submitf,isFetching} = {...props};
  const {credentials} = {...cred};
  // const {id,username,password,department,role} = cred?.credentials; 
  let onsubit = (e) =>{

      if(typeof props?.credentials === undefined || props.credentials === null){
          
        props.handleSubmit(e);
      }else{
        submitf(e)
      }
    
  }

  const formsubs = ()=>{
    return(
      <div>
      
      <form onSubmit={(e) =>{
        onsubit(e)
      }}>
        <label htmlFor='username'>
          Username
        </label>
        <input
        
          type="text"
          name="username"
          value={
           credentials?.username
          }
          onChange={
            handleInputChange
          }
        />
        <label htmlFor='password'>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={ props?.credentials?.password}
          onChange={
            handleInputChange
          }
        />
        <label htmlFor='department'>
            Department
        </label>
        <input 
          type="text"
          name="department"
          value={ props?.credentials?.department}
          onChange={
            handleInputChange
          }
        />
        <label htmlFor='role'>
            Role
        </label>
        <input 
          type="text"
          name="role"
          value={ props?.credentials?.role}
          onChange={handleInputChange
          }
        />
       <button type="Submit">Register</button>
      </form>
      </div>)
    
  }

    return (


      (typeof props?.credentials === undefined)
  ? null 
  : 
      formsubs()
    )


}


const mapStateToProps = ({...state}) => {
  return ({
    handleInputChange: state?.inputChange,
    credentials: state?.credReducer?.cred?.credentials[0],
    credSignup: state.creds.ADD_NEW_CREDS
  });
};


export default connect(mapStateToProps, { credSignup })(CredComp);

 