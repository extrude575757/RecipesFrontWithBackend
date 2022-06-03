import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";
import {addNewCred } from '../../../actions/credActions'; 
const SignupR = (props)=>{


const {handleChange,creds,login} = props;



return (
  <div>Register
  <form onSubmit={login}>
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
  


export default connect(mapStateToProps, { addNewCred })(SignupR);
