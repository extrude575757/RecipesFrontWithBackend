import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import PropTypes from 'prop-types';
const Inputchange = ({props,handleInputChange,isFetching,labelFor,credentials}) =>{
//   const {username, id, password, department, role} = {...credentials}

//   const [value,setValue] = useState({
//     id:47,
//     username:  username || ' f', 
//     password: 'padnma',
//     department:  'No Dep',
//     role:1
// })
// const {value, onchange,  credentials,isFetching,labelFor } = {...props};
const { username,department,password,role  } = {credentials}

const { value,setValue} = useState({
    id:46,
    username: ' f', 
    password: 'padnma',
    department:  'No Dep',
    role:1
  });
    const formName =(f)=>{
        if(username !== undefined){
            console.log(f);
            props.handleInputChange(e);
        }
    }
    const changit = (e)=>{
      
          setValue({...value, [e.target.name]: e.target.value});
       
            props.handleInputChange(e,value);
        
    }

    const cval = (e) =>{
        
        if(setValue !== undefined ){
            return(
                setValue( newVal =>{
                    return(
                        {...value, [e?.target?.name]: e?.target?.value}
                    )
                })
              
               )
           }
      }
  
  
      const zval = (e) =>{
        
        if( e.target.value !== undefined ){
            let zz = e?.target?.value;
            return(
                zz
              
               )
           }
      }
  

      const onchange = (e)=>{
        

  
           if( handleInputChange !== undefined ){
           
            return(
                zval(e),
                cval(e),
                handleInputChange(e,value)
              
               )
           }
      }
  useEffect = () =>{
    if( setValue !== undefined ){
        console.log('value')
      setValue({
        id:46,
        username: ' f', 
        password: 'padnma',
        department:  'No Dep',
        role:1
      })
    }else{
        console.log('value')
        setValue(neval =>{ neval})
      }
  }
  

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
              username
              }
              onChange={e =>
                onchange(e)
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
       (typeof isFetching !== undefined && typeof value !== undefined && isFetching === false &&
        <Thenames />)
    );
}


export default Inputchange;

Inputchange.propTypes = {
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
    setValue: PropTypes.func
}