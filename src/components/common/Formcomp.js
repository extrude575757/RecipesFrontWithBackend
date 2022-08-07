import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import Inputchange  from './Inputchange';
import Buttonchange from './Buttonchange';
import PropTypes from 'prop-types';

const Formcomp = ({props,credentials,value,val,handleInputChange,isFetching}) =>{
  // const {handleSubmit,value,credentials,isFetching} = {...props}
  // const {username, id, password, department, role} = {...credentials}



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

    const formName =(f)=>{
        if(username !== undefined){
            console.log(f);
            props.handleInputChange(e);
        }
    }
    const cval = (e) =>{
      if(typeof(setVal) !== undefined){
        setVal( currState =>{
          return {...currState, [e?.target?.name]: e?.target?.value}});
       
      }
    }


    // const { val,setVal} = useState({
    //   id:46,
    //   username: ' f', 
    //   password: 'padnma',
    //   department:  'No Dep',
    //   role:1
    // });
    const onchange = (e)=>{
      
         cval(e)

            handleInputChange(e,value);
        
    }
// useEffect = () =>{
//   if(typeof(setVal) === undefined ){
//     setVal({
//       id:46,
//       username: ' f', 
//       password: 'padnma',
//       department:  'No Dep',
//       role:1
//     })
//   }
// }

  
    // const formsubs = ()=>{
      
    //     <div>
        
    //     <form onSubmit={(e) =>submitf(e)}>
    //       <label htmlFor='username'>
    //         Username
    //       </label>
    //       <input
          
    //         type="text"
    //         name="username"
    //         value={
    //          value.username
    //         }
    //         onChange={(e) =>{
    //           onChange(e)
    //         }}
    //       />
    //       <label htmlFor='password'>
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         name="password"
    //         value={ value.password}
    //         onChange={(e) =>{
    //           onChange(e)
    //         }}
    //       />
    //       <label htmlFor='department'>
    //           Department
    //       </label>
    //       <input 
    //         type="text"
    //         name="department"
    //         value={ value.department}
    //         onChange={(e) =>{
    //           onChange(e)
    //         }}
    //       />
    //       <label htmlFor='role'>
    //           Role
    //       </label>
    //       <input 
    //         type="text"
    //         name="role"
    //         value={value.role}
    //         onChange={(e) =>{
    //           onchange(e);
    //         }}
    //       />
    //      <button type="Submit">Register</button>
    //     </form>
    //     </div>
      
    // }
const Overboard = () =>{
  if(typeof({val}) !== undefined || typeof(val) !== null ){
    return(
      <>
      <form >
      
    <Inputchange {...props} val={val} handleInputChange={handleInputChange} isFetching={isFetching} labelFor={'username'} username={val?.username}/>
    <Inputchange val={val} handleInputChange={handleInputChange} isFetching={isFetching} labelFor={'password'} password={val?.password}/>
    <Inputchange val={val} handleInputChange={handleInputChange} isFetching={isFetching} labelFor={'department'} department={val?.department}/>
    <Inputchange val={val} handleInputChange={handleInputChange} isFetching={isFetching} labelFor={'role'} role={val?.role}/>
    
   <Buttonchange val={val}/>
  </form>
      </>
    )
  }
}
    return (
     
      
         <Overboard />
        
       
    
    );
}




export default connect(
  state => ({
    value: state.value,
    cred : state,
    credentials: state.credentials,
    isFetching: state.credReducer.isFetching,
  handleInputChange: state.handleInputChange,
  handleSubmit:state.handleSubmit
  }),
  {}
)(Formcomp)

Formcomp.propTypes = {
  setVal: PropTypes.func,
  handleInputChange: PropTypes.func
}