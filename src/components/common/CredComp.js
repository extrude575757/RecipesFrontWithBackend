import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Signup } from "../pages/Signup";
const CredComp =(props) =>{

  const {credentials,login} = props;
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
    const [ credd, setNewCredd] = useState(    {


    ...props.credd
      
  });


  useEffect(()=>{

    if(credd === undefined && credentials !== undefined){
      credd = {
          ...credentials,
          [credentials.target.name]: credentials.target.value}
          addNewCred(credd);
        console.log('credsin'+credentials+props.credd);  
    } else if(credentials === undefined && credd !== undefined){
      credentials = {
        ...credd,
        [credd.target.name]: credd.target.value}
        addNewCred(credd);
      console.log('credsin'+credentials +props.credd);  
    } else if(credentials === undefined && credd === undefined){
      <Signup />
    } else if(credentials !== undefined && credd !== undefined){
      addNewCred(credd);
    }

  },[{credd,credentials}]);
    return (
        <div>Register
        <form onSubmit={login}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={props.username}
            onChange={props.handleChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={ props.department}
            onChange={props.handleChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={props.password}
            onChange={props.handleChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={props.role}
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

 