import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
// import {credActs } from '../../state/actions/credActions'
// import Inputchange  from './Inputchange';
// import Buttonchange from './Buttonchange';
import Formcomp from '../../common/Formcomp';
import { getCredentials } from '../../../api';
import Signup from './Signup';
import SignupR from './SignupR';
import PropTypes from 'prop-types';
const CredComp = ({props,handleSubmit,value,handleInputChange,credentials,credd,isFetching}) =>{
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
    //           onChang(e)
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
    //           onChang(e)
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
    //           onChang(e)
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
    //           onchang(e);
    //         }}
    //       />
    //      <button type="Submit">Register</button>
    //     </form>
    //     </div>
      
    // }
const [credData,setCredData] = useState({
  id:0,username: ' ',password:'past',department:'depd',role:1
})
    const isprev = (cc) =>{
      if(typeof(credData) !== undefined, credData.username !== cc.username){
        console.log('credData ',credData.username ,' cc,credentials ', cc.username,credentials.username);
      }
    }
    useEffect(() => {
      isprev(credentials);
    }, [credData]);
const Overboard = () =>{
  if(typeof(value) !== undefined && typeof(value) === Object || typeof(value) !== null  ){
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
     
      
       <Overboard {...props} value={value} isFetching={isFetching} 
       credentials={credentials} credd={credd} 
       handleSubmit={handleSubmit} 
       onChange={handleInputChange}   />
        
       
    
    );
}




export default connect(
  state => ({
    value: state.value,
    thename: state.thename,
    cred : state,
    credd: state.credd,
    credData: state.credData,
    credentials: state.credReducer.credentials[0],
    isFetching: state.isFetching,
  handleInputChange: state.handleInputChange,
  handleSubmit:state.handleSubmit,
  setCredData: state.setCredData
  }),
  {}
)(CredComp)



CredComp.propTypes = {
  credData: PropTypes.object,
  val: PropTypes.object,
  thename: PropTypes.string,
  credd: PropTypes.object,
  value: PropTypes.object,
  credentials: PropTypes.object,
  isFetching: PropTypes.bool,
  handleInputChange: PropTypes.func,
  setCredData: PropTypes.func
  
  


}
