import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import PropTypes from 'prop-types';
import SignupR from '../pages/signup/SignupR';
import Signup from '../pages/signup/Signup';
import Formcomp from './Formcomp';
import CredComp from '../pages/signup/CredComp';
const Inputchange = ({props,handleInputChange,value,val,isFetching,labelFor,credentials}) =>{
//   const {username, id, password, department, role} = {...credentials}

//   const [value,setValue] = useState({
//     id:47,
//     username:  username || ' f', 
//     password: 'padnma',
//     department:  'No Dep',
//     role:1
// })
// const {value, onchange,  credentials,isFetching,labelFor } = {...props};
const { username,department,password,role  } = {...credentials}

// const { val,setVal} = useState({
// ...value , [value?.target?.name]: value?.target?.value    
// });
    const formName =(f)=>{
        if(username !== undefined){
            console.log(f);
            // props.handleInputChange(e);
        }
    }
    // const changit = (e)=>{
      
    //       setVal({...value, [e.target.name]: e.target.value});
       
    //         props.handleInputChange(e,value);
        
    // }

    const cval = (e) =>{
        
        if(typeof(value) !== undefined ){
         
               
                    return(
                        {...value, [e.target.name]: e.target.value}
                    )
                
              
               
           }
      }
  
  
      const zval = (e) =>{
        
        if( typeof(e?.target?.value) !== undefined ){
            let zz = e?.target?.value;
            return(
                zz
              
               )
           }
      }
  

      const onchange = (e)=>{
        

  
      
            if(typeof(value ) !== Object){
                
                value={...value,[e.target.name]:e.target.value}
                value = {...value,...value}
            console.log('err',{...value},e.target.name,e.target.value)
            if( typeof(handleInputChange) === function(){handleInputChange(e,value)} ){
                return(
                //     zval(e),
                cval(e),
            
                 
                    handleInputChange(e,{...value})
                )
                  
                   
               }
            // handleInputChange(e,{...value})
           }
                else
           {
            <SignupR {...props} handleInputChange={handleInputChange} value={{...value}}/>
           }
      }
//   useEffect(() =>{
//    try{
//      // if( typeof(val) !== undefined ){
//         console.log('value')
//       setVal({
//         id:46,
//         username: val?.username || ' f', 
//         password: 'padnma',
//         department:  'No Dep',
//         role:1
//       })
//     // }else{
//         console.log('value')
//         setVal(neval =>{ neval})
//     //   }
//    }catch(e){
//     console.log(e);
//    }
//   },[{...val}])
  

    const Thenames = ()=> {
        
       
        if(labelFor === 'username'){
           return(
            <>
            <label htmlFor={labelFor}>
              {labelFor}!
            </label>
            <input 
              type="text"
              name="username"
              value={
              typeof(username) !== undefined && username
              }
              onChange={e =>
                   typeof( onchange) !== function(){return(onchange(e,val))} && onchange(e,val)
                
              }
            />
            </>
           )
        }else if(labelFor === 'password'){
            return(
                <>
                <label htmlFor={labelFor}>
                {labelFor}
              </label>
              <input
                type="password"
                name="password"
                value={ password}
                onChange={e =>
                  onchange(e)
                }
              />
                </>
            )
        }
        else if(labelFor === 'department'){
            return(
                <>
                <label htmlFor='department'>
                {labelFor}
              </label>
              <input
                type="text"
                name="department"
                value={ department}
                onChange={(e) =>{
                  onchange(e)
                }}
              />
                </>
            )
        }
        else if(labelFor === 'role'){
            return(
                <>
                <label htmlFor='role'>
                {labelFor}
              </label>
              <input
                type="number"
                name="role"
                value={ role}
                onChange={(e) =>{
                  onchange(e)
                }}
              />
                </>
            )
        }else{
            return(
                <>
                errros today
                </>
            )
        }
        
    }

    return (
       typeof(isFetching) !== undefined && typeof(value) !== undefined && isFetching === false &&
        <Thenames handleInputChange={handleInputChange} val={val} />
    );
}


export default Inputchange;

Inputchange.propTypes = {
    cred: PropTypes.object,
    id: PropTypes.number,
    username: PropTypes.string,
    password: PropTypes.string,
    department: PropTypes.string,
    role: PropTypes.number,
    labelFor: PropTypes.string.isRequired,
    value: PropTypes.object,
    isFetching: PropTypes.bool,
    onchange: PropTypes.func,
    handleInputChange: PropTypes.func,
    // setVal: PropTypes.func
}