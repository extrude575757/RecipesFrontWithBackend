import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addNewCred,credSignup } from '../../state/actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Signup} from "../pages/signup";
import Formcomp from "./Formcomp"
import { Button, Card, Form, Input, Modal } from 'antd';
const CredComp =({...props}) =>{


  const [isSubmitted,setIsSubmitted] = useState( () => false);
const [regcred, setRegcred] = useState( () => [{
  id:0,
username: ' ',
password: ' ',
department: 'Nah Deps',
role:1
} ]);
  const {cred,handleInputChange,submitf,isFetching} = {...props};
  const {credentials} = {...cred};
  // const {id,username,password,department,role} = cred?.credentials; 
  let onsubmit = (e) =>{

      if(typeof credentials === undefined || credentials === null){
          
        if(isSubmitted){
          props.handleSubmit(e);
          setIsSubmitted(false);
        }
      }else{
        if(isSubmitted){
          submitf(e);
          setIsSubmitted(false);
        }
      }
    
  }

  const [form] = Form.useForm();

  const formsubs = ()=>{
    return(
      <div>
      
      <form onSubmit={(e) =>{
        onsubit(e)
      }}>
        <label htmlFor='username'>
          Username
        </label>
        <input
        
          type="text"
          name="username"
          value={
           credentials?.username
          }
          onChange={
            handleInputChange
          }
        />
        <label htmlFor='password'>
          Password
        </label>
        <input
          type="password"
          name="password"
          value={ props?.credentials?.password}
          onChange={
            handleInputChange
          }
        />
        <label htmlFor='department'>
            Department
        </label>
        <input 
          type="text"
          name="department"
          value={ props?.credentials?.department}
          onChange={
            handleInputChange
          }
        />
        <label htmlFor='role'>
            Role
        </label>
        <input 
          type="text"
          name="role"
          value={ props?.credentials?.role}
          onChange={handleInputChange
          }
        />
       <button type="submit">Register</button>
      </form>
      </div>)
    
  }

const changeit = (e) =>{
  if(!isSubmitted){
    console.log([ {[e.target.name]: e.target.value}])
    let c  = e.target.name;
    setRegcred( () => [{
      id: e.target.value ,
    username: e.target.value ,
    password:  e.target.value ,
    department:  e.target.value ,
    role: e.target.value 
  } ] )
  }
}


const inputChange=(e)=> {
if (typeof e !== undefined){
  const target = e.target;
  console.log('hdlIval '+ e.target+credentials?.username);
  // console.log('crdr '+ credd.role);
  const value =  target.value;
  const name = target.name;
        setRegcred( () =>   [{
          ...credentials,
          [name]: value
         }]  );
   

     console.log('newname '+ credentials?.username + credentials?.department+ '   ' );

}  

};

const onFinish = (e) =>{
  props.isFetching = true;
  setIsSubmitted(() =>{
    true
  });
  onsubmit(e);
}

  const forma = () =>{
   return(
    <Card className="child-card-form" bordered={false}>
    <div className="card-center">
      <Form form={form}
        initialValues={{
          credentials:{
              id:9,
            "username": 'sdf ',
            password: 'sfjjj',
            department: 'Nah Deps',
            role:1
          } 
        }}

        name="submit"
        layout="inline"
        onChange={ (e) =>{
          if(isSubmitted === false){
            changeit(e);
          }
        }}

        onFinish={ (e) =>{
          if(isSubmitted === false){
            onFinish(e);
          }
        }}
      >
      <Form.Item name="username"
        label="Username"
        value={credentials?.username}
        >
        <Input  type="text"  />
        </Form.Item>
        <Button
        htmlType="submit"
        className="save-btn"
        disabled={isSubmitted}
      >
        { credentials === undefined ? null : credentials?.username   }
      </Button>
      </Form>
    
    
     
    </div>
 </Card>
   )
    
  }

    return (


      (typeof credentials === undefined)
  ? null 
  : 
      forma()
    )


}


const mapStateToProps = ({...state}) => {
  return ({
    handleInputChange: state?.handleInputChange,
    credentials: state?.credReducer?.cred?.credentials,
    credSignup: state.credReducer.credSignup
  });
};


export default connect(mapStateToProps, { credSignup })(CredComp);

 