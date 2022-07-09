import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Signup} from "../pages/signup";
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
      role:1},
      isFetching:false,
      error:''

      
  });




  useEffect(()=>{

    if(credd === undefined && credentials !== undefined){
      credd = {
          ...credentials,
          [credentials.target.name]: credentials.target.value}
          addNewCred(credd);
        console.log('credsin1'+credd.role);  
    } else if(credentials === undefined && credd !== undefined){
      credentials = {
        ...credd,
        [credd.target.name]: credd.target.value}
        addNewCred(credd);
      console.log('credsin1 '+credentials +props.credd);  
    } else if(credentials === undefined && credd === undefined){
      <Signup />
    } else if(credentials !== undefined && credd !== undefined){
      addNewCred(credd);
    }

  },[credd]);
    return (
        props.handleSubmit !== undefined ? <div>Register
        <form onSubmit={(e) =>{
          if(props.handleSubmit(e) === undefined || props.handleSubmit(e) === null){
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
            value={credd.username || username || '' || undefined}
            onChange={props.handleInputChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={credd.department || department || ''}
            onChange={props.handleInputChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credd.password || password || ''}
            onChange={props.handleInputChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={credd.role ||  role ||''}
            onChange={props.handleInputChange || undefined}
          />
          <Link to={`/login/`}><button type="submit">Register</button></Link>
        </form>
      </div> : <Signup />
    )


}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials
  };
};


export default connect(mapStateToProps, {handleSubmit,handleInputChange })(CredComp);

 