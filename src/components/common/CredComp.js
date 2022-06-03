import React  from "react";
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
const CredComp =(props) =>{

  const {creds,handleChange} = props;
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

    return (
        <div>Register
        <form onSubmit={credSignup}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={creds.username}
            onChange={handleChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={creds.department}
            onChange={handleChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={creds.password}
            onChange={handleChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={creds.role}
            onChange={handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    )


}


const mapStateToProps = (state) => {
  return {
    creds: state.credReducer.credentials
  };
};


export default connect(mapStateToProps, { addNewCred,credSignup })(CredComp);

 