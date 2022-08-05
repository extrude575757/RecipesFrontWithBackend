import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import Inputchange  from './Inputchange';
const Formcomp = ({...props}) =>{
  const {handleSubmit,credentials,isFetching} = {...props}
  const {username, id, password, department, role} = {...credentials}

  const [value,setValue] = useState({
    id:46,
    username:  username || ' f', 
    password: 'padnma',
    department:  'No Dep',
    role:1
})

    const submitf =(e)=>{
        try{
          // credentials[0]= {...value, [value.target.name]: value.target.value}
          // e.preventDefault();
          console.log(value.username)
        
          props.handleSubmit(e,value)
          
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

const submit =(e)=>{
//   try{
   
//     isFetching = true;
//      console.log(isFetching)
//      addNewCred(credentials);
//     props.handleSubmit(e,value);
//   }

// catch(e){
//   console.log(e);
// }
//  credentials[0].username = value.username
//  const newup = {...value, [value.target.name]: value.target.value};
//  console.log('new'+newup);
 
// credSignup({...credentials[0], [value.target.name]: value.target.value})
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
        
       <form >
        <Inputchange onchange={onchange} isFetching={isFetching} labelFor={'username'} username={value.username}/>
        <Inputchange onchange={onchange} isFetching={isFetching} labelFor={'password'} password={value.password}/>
        <Inputchange onchange={onchange} isFetching={isFetching} labelFor={'department'} department={value.department}/>
        <Inputchange onchange={onchange} isFetching={isFetching} labelFor={'role'} role={value.role}/>
        
       <button  onClick={(e) =>submitf(e)} >Register</button>
      </form>
      </> 
    );
}




export default connect(
  state => ({
    value: state.value,
    cred : state.cred,
    credentials: state.credentials,
    isFetching: state.isFetching,
  credSignup: state.credReducer.credSignup,
  handleInputChange: state.handleInputChange,
  // handleSubmit: state.handleSubmit
  handleSubmit:state.handleSubmit
  }),
  {}
)(Formcomp)