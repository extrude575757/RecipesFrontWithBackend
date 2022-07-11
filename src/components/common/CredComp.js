import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Signup} from "../pages/signup";
const CredComp =(props) =>{
  const {credentials,inputChange,submitf} = props;
  const {username,password,department,role} = credentials;

    return (
        <form onSubmit={(e) =>{
          if(submitf(e) === undefined || submitf(e) === null){
            
            e.preventDefault();
            props.handleSubmit(e);
          }else{
            e.preventDefault();
            submitf(e)
          }
        }}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={username  || '' || undefined}
            onChange={inputChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={ password || '' || undefined}
            onChange={inputChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={department || '' || undefined}
            onChange={inputChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={ role ||'' || undefined}
            onChange={inputChange|| undefined}
          />
          <Link to={`/login/`}><button type="submit">Register</button></Link>
        </form>
    )


}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials,
    credSignup: state.credReducer.credSignup
  };
};


export default connect(mapStateToProps, { credSignup })(CredComp);

 