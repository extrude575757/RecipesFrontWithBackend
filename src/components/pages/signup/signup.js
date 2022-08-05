import React, {useEffect} from "react";
import CredComp from "./CredComp";
import { connect } from "react-redux";
import SignupR from "./SignupR";
import {credSignup,addNewCred,addcred,addCred} from '../../../state/actions/credActions'; 
import Formcomp from "../../common/Formcomp";
import { Link, useHistory } from 'react-router-dom';
const signup = (props)=>{
  const { push } = useHistory();

const {handleInputChange,credd} = {...props};

  const submitit = (e,n) => {
    // e.preventDefault();
    // credSignup(credd.credentials[0]);
    // console.log(props,'submit state'+credd) ;
    // push('/login/');
console.log('handling submit',n)
isFetching = true;
      if(isFetching){
       e.preventDefault();
       credSignup(credentials[0]);
       console.log(props,'submit state'+credd) ;
       push('/login/');
       isFetching = false;
        // handleInputChange(e);
      }else{
       console.log(credd,n,'didnwork')

    console.log(credd)
      }

   }
   
    // useEffect(()=>{

    //   try{
    //     if(typeof isFetching === undefined  ){
  
        
    //       props.isFetching = false;
    //   }else if(typeof credentials === undefined){
    //     console.log('error creds')
    //   }
   
    //   }catch(e){
    //     console.log(e);
    //   }
  
    // }, [{props}]);



const inputChange = (e)=>{
  try{
    if(typeof credd?.credentials[0] !== undefined){
      console.log(credd?.credentials[0]);
  
    props?.handleInputChange(e)
    }
  
  }
  catch(e){
    console.log(e);
  }
}
return (
     <SignupR submitit={submitit}/>  

)

}



  

  export default connect(
    state => ({
      cred : state.cred,
      credentials: state.credentials,
      submitit: state.submitit,
      isFetching: state.isFetching
    }), 
    {credSignup,addNewCred,addcred,addCred}
  )(signup)


