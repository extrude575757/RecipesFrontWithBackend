import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import Inputchange  from './Inputchange';
const Formcomp = ({...props}) =>{
  const {handleSubmit,credentials,isFetching} = {...props}
  const {username, id, password, department, role} = {...credentials}

  const [value,setValue] = useState({
    id:43,
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
       
//  Uncaught TypeError: Cannot set properties of undefined (setting 'credentials')
          // credentials = {...e, [e.target.name]: e.target.value}
            // console.log('on'+props.isFetching)
            // console.log('on'+props.credentials.username)
           
          //  if(typeof credentials === undefined){
          //   credentials = {...value, [e.target.name]: e.target.value}
            
          // }else if(typeof credentials != undefined || typeof credentials !== null){
          //   console.log(value.username+' ',credentials.username )
          // }
            
            // addNewCred({value})
            props.handleInputChange(e,value);
        
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
        
       <div >
        <Inputchange onchange={onchange} isFetching={isFetching} labelFor={'username'} val={value.username}/>
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
       <button  onClick={(e) =>submitf(e)} >Register</button>
      </div>
      </> 
    );
}


const mapStateToProps = ({...state}) => {
    return( {
      cred : state.credReducer.cred,
      credentials: state?.credReducer?.credentials,
      isFetching: state.credReducer.isFetching,
    credSignup: state.credReducer.credSignup,
    handleInputChange: state.handleInputChange,
    // handleSubmit: state.handleSubmit
    handleSubmit:state.handleSubmit
    },{});
  };
  


export default connect(mapStateToProps, {addNewCred,credSignup })(Formcomp);
