import React from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'

const Formcomp = ({props}) =>{

    const submitf =(e)=>{
        try{
            if(e !== undefined){
                props.handleSubmit(e);
            }
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
    const onchange = (e)=>{
        if(props?.credentials !== undefined){
            console.log(props.credentials[0])
        props.handleInputChange(e);
        }
    }
    return (
        <form onSubmit={(e) =>{
            if(props.credentials === undefined || props.credentials === null){
              
              props.handleSubmit(e);
            }else{
              submitf(e)
            }
          }}>
            <label htmlFor='username'>
              Username
            </label>
            <input
            
              type="text"
              name="username"
              value={
               props?.credentials?.username
              }
              onChange={(e) =>{
                props?.handleInputChange(e)
              }}
            />
            <label htmlFor='password'>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={ props?.credentials?.password}
              onChange={(e) =>{
                props?.handleInputChange(e);
              }}
            />
            <label htmlFor='department'>
                Department
            </label>
            <input 
              type="text"
              name="department"
              value={ props?.credentials?.department}
              onChange={(e) =>{
                props?.handleInputChange(e);
              }}
            />
            <label htmlFor='role'>
                Role
            </label>
            <input 
              type="text"
              name="role"
              value={ props?.credentials?.role}
              onChange={(e) =>{
                onchange(e);
              }}
            />
           <button type="Submit">Register</button>
          </form>
    );
}


const mapStateToProps = (state) => {
    return {
      credentials: state.credReducer.credentials,
    credSignup: state.credReducer.credSignup,
    handleInputChange: state.handleInputChange,
    handleSubmit: state.handleSubmit
    };
  };
  


export default connect(mapStateToProps, { credSignup})(Formcomp);
