import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import Inputchange  from './Inputchange';
import PropTypes from 'prop-types'
const Buttonchange = ({handleSubmit,value,credentials,isFetching}) =>{
//   const {handleSubmit,value,credentials,isFetching} = {...props}
//   const {username, id, password, department, role} = {...credentials}

//   const [value,setValue] = useState({
//     id:46,
//     username:  username || ' f', 
//     password: 'padnma',
//     department:  'No Dep',
//     role:1
// })

    const submitf =(e)=>{
        try{
          // credentials[0]= {...value, [value.target.name]: value.target.value}
          // e.preventDefault();

        
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


    // const formName =(f)=>{
    //     if(username !== undefined){
    //         console.log(f);
    //         props.handleInputChange(e);
    //     }
    // }
    // const onchange = (e)=>{
    //       setValue({...value, [e.target.name]: e.target.value});
    //         props.handleInputChange(e,value);
    // }

    const buttonsubmit = () =>{
        return (
            <button  onClick={e =>submitf(e)} >{credentials}Register</button>
        )
    }

    return (
    
      buttonsubmit()
    
    );
}




export default Buttonchange;


Buttonchange.propTypes = {
    handleSubmit: PropTypes.func,
    credentials: PropTypes.object
}