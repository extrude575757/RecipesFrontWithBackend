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
    const [ credd, setNewCredd] = useState({

      id:0,
      username: username,
      department: department,
      password: password,
      role:1,
      isFetching:false,
      error:''
      
  });

  const handleInputChange=(e)=> {
    const target = e.target;
    console.log('hdlIval '+ credd.username);
    // console.log('crdr '+ credd.role);
    const value =  target.value;
    const name = target.name;
          setNewCredd({
            [name]: value
           });
     
  
       console.log('newname '+ credd.username + credd.department+ '   ' + props.credentials.username);
  };


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
    return (
        <div>Register
        <form onSubmit={credSignup}>
          <label htmlFor='username'>
            Username
          </label>
          <input
            type="text"
            name="username"
            value={credd.username}
            onChange={handleInputChange}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={credd.department}
            onChange={handleInputChange}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={credd.password}
            onChange={handleInputChange}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={credd.role}
            onChange={handleInputChange}
          />
          <button>Register</button>
        </form>
      </div>
    )


}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials[0]
  };
};


export default connect(mapStateToProps, { addNewCred,credSignup })(CredComp);

 