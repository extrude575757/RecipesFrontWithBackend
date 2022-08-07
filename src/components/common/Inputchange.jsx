import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import PropTypes from 'prop-types';
import SignupR from '../pages/signup/SignupR';
import Signup from '../pages/signup/Signup';
import Formcomp from './Formcomp';
import CredComp from '../pages/signup/CredComp';
const Inputchange = ({props,handleInputChange,value,val,isFetching,thename,labelFor,credentials}) =>{
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
const [laname,setLaname] = useState({})
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

    const cval = (e,aname) =>{
        
        if(typeof(value) !== undefined ){
            setLaname(aname)
                console.log('logg',zval(e))
            value={...value,[e.target.name]:e.target.value}
                credentials = {...credentials,...value, [value.target.name]:value.target.value}
            console.log('err',aname,{credentials},{value},e.target.name,e.target.value)
            console.log('aname')
            setLaname(aname);
            handleInputChange(e,value)
               
                    return(

            
                 
                    
                        {...value, [e.target.name]: e.target.value}
                    )
                
              
               
           }
      }
  
  
      const zval = (e) =>{
        
        if( typeof(e.target.value) !== undefined ){
            let zz = e.target.value;
            return(
                zz
              
               )
           }
      }
      const [vaname,setVaname] = useState('')
  
      const matchcred = (aname,aval) =>{
        console.log(aval,credentials.username)
        if(aval !== credentials.username){
            setLaname(aname)
        setVaname(aval);

        console.log('logg',laname,vaname) 
        // credentials?.map( e =>{
        //     credentials[laname] = vaname;
        // })
       
            credentials[laname] = vaname;
        
        }
      }

      const onchange = (e)=>{
        

        const aname = e.target.name;
        const aval = e.target.value;
        
          matchcred(aname,aval)
            
        
            if(typeof(value ) !== Object && typeof(credentials ) !== Object && typeof(aname) == String ||  
            aname != laname && typeof(handleInputChange) === function(){handleInputChange(e,value)}  ){
                
                
            
                return(
                //     zval(e),
                cval(e,aname),
                handleInputChange(e,value)
                    ,<Formcomp {...props} thename={laname} credentials={{credentials}} handleInputChange={handleInputChange} value={value} />
                )
                  
                   
               
            // handleInputChange(e,{...value})
           }
        
                else
           {
            <Formcomp {...props} thename={labelFor} credentials={credentials} handleInputChange={handleInputChange} value={value}/>
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
  const logm = (e) =>{
    
    console.log(e,laname)
    console.log(credentials[e])
    return(credentials[e])
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
            //   typeof(username) !== undefined && username
            logm('username')
              }
              onChange={e =>
                //    typeof( onchange) === function(){return(onchange(e,val))} && onchange(e,val)
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
                value={ logm('password')}
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
                value={ logm('department')}
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
                value={ logm('role')}
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
        <Thenames handleInputChange={handleInputChange} thename={thename} val={val} />
    );
}


export default Inputchange;

Inputchange.propTypes = {
    cred: PropTypes.object,
    credentials: PropTypes.object,
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
    thename: PropTypes.string
    // setVal: PropTypes.func
}