import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import PropTypes from 'prop-types';
const Inputchange = ({...props}) =>{
  const {handleSubmit,credentials} = {...props}
//   const {username, id, password, department, role} = {...credentials}

//   const [value,setValue] = useState({
//     id:47,
//     username:  username || ' f', 
//     password: 'padnma',
//     department:  'No Dep',
//     role:1
// })

const {labelFor, username,department,password,role, ttype, uname, val, isFetching   } = {...props}


    const formName =(f)=>{
        if(username !== undefined){
            console.log(f);
            props.handleInputChange(e);
        }
    }
    // const onchange = (e)=>{
      
    //       setValue({...value, [e.target.name]: e.target.value});
       
    //         props.handleInputChange(e,value);
        
    // }

    const thenames = ()=> {
       
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
                props.onchange(e)
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
                  props.onchange(e)
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
                  props.onchange(e)
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
                type="text"
                name="role"
                value={ role}
                onChange={(e) =>{
                  props.onchange(e)
                }}
              />
                </>
            )
        }
        

       
    }


    return (
      
        
        isFetching === false &&
        
          thenames()


        
        
    
      
    );
}


export default Inputchange;

Inputchange.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    labelFor: PropTypes.string.isRequired,
    value: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    onchange:PropTypes.func.isRequired
}