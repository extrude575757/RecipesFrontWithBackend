import React,{useEffect,useState} from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
const SubmitReg = (props) =>{
  const {credentials,handleInputChange,handleSubmit} = props;
  const {username,password,department,role} = credentials;


//   const [ credd, setNewCredd] = useState({

//     credentials:{id:76,
//     username: username,
//     password: password,
//     department: department,
//     role:1},
//     isFetching:false,
//     error:''

    
// });




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
return(

  <div>
          <form onSubmit={
          
          handleSubmit
        
      }>
        <label htmlFor='username'>
          Username
        </label>
        <input
          type="text"
          name="username"
          value={props.credentials.username || username || '' || undefined }
          onChange={props.handleInputChange}
        />
        <label htmlFor='password'>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={props.credentials.password || password || '' || undefined }
          onChange={props.handleInputChange}
        />
        <label htmlFor='department'>
            Department
        </label>
        <input 
          type="text"
          name="department"
          value={props.credentials.department || department || '' || undefined }
          onChange={(e)=>{
console.log(props.credentials.department);
            if(props.credentials.department !== props.cred.credentials.department){
              handleInputChange(e)
            }else{
              console.log('its department error',e)
            }
          }
          }
        />
        <label htmlFor='role'>
            Role
        </label>
        <input 
          type="text"
          name="role"
          value={props.credentials.role ||  role || '' || undefined}
          onChange={
            props.handleInputChange
          }
        />
       <button >Register</button>
      </form>
  </div>

)
}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials
  };
};

export default connect(mapStateToProps, {})(SubmitReg);