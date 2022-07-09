import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const submitReg = (props) =>{
  const {credentials,handleInputChange,handleSubmit} = props;
  const {username,password,department,role} = credentials;
return(
  <div>Register
        <form onSubmit={(e) =>{
          if(props.handleSubmit === undefined || props.handleSubmit(e) === null){
            props.handleSubmit(e);
          }else{
            props.handleSubmit(e)
          }
        }}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={props.credentials.username || username || '' || undefined}
            onChange={props.handleInputChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={props.credentials.department || department || '' || undefined }
            onChange={props.handleInputChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={props.credentials.password || password || '' || undefined}
            onChange={props.handleInputChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={props.credentials.role ||  role ||''|| undefined}
            onChange={props.handleInputChange || undefined}
          />
          <Link to={`/login/`}><button type="submit">Register</button></Link>
        </form>
      </div>
)
}



const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials,
    handleSubmit: state.handleSubmit
  };
};

export default connect(mapStateToProps, {})(submitReg);