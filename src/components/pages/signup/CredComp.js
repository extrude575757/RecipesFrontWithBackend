import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
// import {credActs } from '../../state/actions/credActions'
// import Inputchange  from './Inputchange';
// import Buttonchange from './Buttonchange';
import Formcomp from '../../common/Formcomp';
import Signup from './Signup';
import SignupR from './SignupR';
const CredComp = ({handleSubmit,value,handleInputChange,credentials,isFetching}) =>{
  // const {handleSubmit,value,credentials,isFetching} = {...props}
  // const {username, id, password, department, role} = {...credentials}



    const submitf =(e)=>{
        try{
          // credentials[0]= {...value, [value.target.name]: value.target.value}
          // e.preventDefault();
          console.log(value.username)
        
          handleSubmit(e,value)
          
            // if(value !== undefined && props.handleSubmit !== undefined ){
            //     // handleSubmit(e);
            //     // credentials[0] =   {...value, [value.target.name]: value.target.value};
                
            //     credSignup({value});
            // }else
            //   if(props.credentials === undefined || props.credentials === null){
            
            //     props.credentials = {...value}
            //     credSignup(value);
            //   }else{
            //     console.log('wentformsubs')
            //     formSubs(e)
            //   }
        }
    
    catch(e){
        console.log(e);
    }
}

    const formName =(f)=>{
        if(username !== undefined){
            console.log(f);
            props.handleInputChange(e);
        }
    }
    const onChang = (e)=>{
      
          // setValue({...value, [e.target.name]: e.target.value});
      if( typeof(handleInputChange) !== undefined ){
        console.log(value)

            props.handleInputChange(e,value);
            return(
              <SignupR />
            )
       }
        
    }


  
    const formsubs = ()=>{
      
        <div>
        
        <form onSubmit={(e) =>submitf(e)}>
          <label htmlFor='username'>
            Username
          </label>
          <input
          
            type="text"
            name="username"
            value={
             value.username
            }
            onChange={(e) =>{
              onChang(e)
            }}
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={ value.password}
            onChange={(e) =>{
              onChang(e)
            }}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={ value.department}
            onChange={(e) =>{
              onChang(e)
            }}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={value.role}
            onChange={(e) =>{
              onchang(e);
            }}
          />
         <button type="Submit">Register</button>
        </form>
        </div>
      
    }
const Overboard = () =>{
  if(typeof(value) !== undefined || value !== null ){
    return(
      <>

      <Formcomp {...props} value={value} isFetching={isFetching} 
      credentials={credentials} credd={credd} 
      handleSubmit={handleSubmit} 
      onChange={handleInputChange}  />
      
      </>
    )
  }
}
    return (
     
      
      !isFetching && <Overboard />
        
       
    
    );
}




export default connect(
  state => ({
    value: state.value,
    cred : state,
    credentials: state.credReducer.credentials[0],
    isFetching: state.isFetching,
  handleInputChange: state.handleInputChange,
  handleSubmit:state.handleSubmit
  }),
  {}
)(CredComp)