import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'

const Formcomp = (props) =>{
  const {handleSubmit,credentials,isFetching} = props

  const [value,setValue] = useState({
    id:Date.now(),
    username: 'formdiz', 
    password: 'padnma',
    department: 'No Dep',
    role:1
})

    const submitf =(e)=>{
        try{
          console.log(props.credentials)
          e.preventDefault();
            if(value !== undefined && props.handleSubmit !== undefined ){
                // handleSubmit(e);
                credSignup(value);
            }else
              if(props.credentials === undefined || props.credentials === null){
            
                props.credentials = value
                credSignup(value);
              }else{
                console.log('wentformsubs')
                formSubs(e)
              }
        }
    
    catch(e){
        console.log(e);
    }
}

const submit =(e)=>{
  try{
    // console.log(isFetching)
    props.handleSubmit(e);
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
      
          setValue({...value, [e.target.name]: e.target.value});
          props.handleInputChange(e,value);
          // props.credentials = {...value, [e.target.name]: e.target.value}
            // console.log('on'+props.isFetching)
            // console.log('on'+props.credentials.username)
            console.log(value)
        
    }


    // useEffect(()=>{

    //   try{
    //     if(typeof value === undefined  ){
  
        
    //       setValue({
    //         id:10,
    //         username: 'fas', 
    //         password: 'dd',
    //         department: 'No dDep',
    //         role:1
    //     });
    //   }else if( typeof props.isFetching === undefined){
    //     console.log(isFetching)
    //     props.isFetching = false
    //   }
    //     // else if(credentials !== undefined && credd !== undefined)
    //     else{
    //       // <Formcomp />;
    //       formsubs();
    
    //     }
    //   }catch(e){
    //     console.log(e);
    //   }
  
    // }, [value]);
  
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
              onChange(e)
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
              onChange(e)
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
              onChange(e)
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
              onchange(e);
            }}
          />
         <button type="Submit">Register</button>
        </form>
        </div>
      
    }

    return (
      <>
        
        <form onSubmit={(e) =>submit(e)}>
          <label htmlFor='username'>
            Username
          </label>
          <input 
            type="text"
            name="username"
            value={
             value?.username
            }
            onChange={e =>
              onchange(e)
            }
          />
          <label htmlFor='password'>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={ value?.password}
            onChange={(e) =>{
              onchange(e)
            }}
          />
          <label htmlFor='department'>
              Department
          </label>
          <input 
            type="text"
            name="department"
            value={ value?.department}
            onChange={(e) =>{
              onchange(e)
            }}
          />
          <label htmlFor='role'>
              Role
          </label>
          <input 
            type="text"
            name="role"
            value={value?.role}
            onChange={(e) =>{
              onchange(e);
            }}
          />
         <button type="submit">Register</button>
        </form>
        </>
    );
}


const mapStateToProps = (state) => {
    return( {
      credentials: state.credReducer.credentials[0],
      isFetching: state.credReducer.isFetching,
    credSignup: state.credReducer.credSignup,
    handleInputChange: state.handleInputChange,
    // handleSubmit: state.handleSubmit
    },{handleSubmit:state.handleSubmit});
  };
  


export default connect(mapStateToProps, { credSignup})(Formcomp);
