import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
const CredComp =({...props}) =>{

  const {credentials} = props;
  const {username,department,password,role} = credentials;
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


    return (
        <div>Register
        <form onSubmit={props.login}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={props.handleChange}
            onChange={props.handleChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={ props.handleChange}
            onChange={props.handleChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={props.handleChange}
            onChange={props.handleChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={props.handleChange}
            onChange={props.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    )


}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials
  };
};


export default connect(mapStateToProps, { addNewCred,credSignup })(CredComp);

 