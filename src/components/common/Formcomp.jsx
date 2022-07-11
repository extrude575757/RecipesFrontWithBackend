import React from 'react';

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

    const formName =(f,e)=>{
        if(username !== undefined){
            console.log(f);
            props.handleInputChange(e);
        }
    }

    return (
        <form onSubmit={(e) =>{
            if(submitf(e) === undefined || submitf(e) === null){
              
              e.preventDefault();
              props.handleSubmit(e);
            }else{
              e.preventDefault();
              submitf(e)
            }
          }}>
            <label htmlFor='username'>
              Username
            </label>
            <input
              type="text"
              name="username"
              value={(e) =>{
               props.credentials.department
              }}
              onChange={(e) =>{
                props.handleInputChange(e);
              }}
            />
            <label htmlFor='password'>
              Password
            </label>
            <input
              type="password"
              name="password"
              value={(e) =>{
                props.handleInputChange(e);
              }}
              onChange={(e) =>{
                props.handleInputChange(e);
              }}
            />
            <label htmlFor='department'>
                Department
            </label>
            <input 
              type="text"
              name="department"
              value={(e) =>{
                props.handleInputChange(e);
              }}
              onChange={(e) =>{
                props.handleInputChange(e);
              }}
            />
            <label htmlFor='role'>
                Role
            </label>
            <input 
              type="text"
              name="role"
              value={(e) =>{
                props.handleInputChange(e);
              }}
              onChange={(e) =>{
                props.handleInputChange(e);
              }}
            />
           <button type="submit">Register</button>
          </form>
    );
}

export default Formcomp

