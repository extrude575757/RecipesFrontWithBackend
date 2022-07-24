import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";
import Signup from "./Signup";
import {credSignup} from '../../../state/actions/credActions'; 
const SignupR = ({...props})=>{


const {handleInputChange,handleSubmit,credd} = {...props};

const submitf = (e) =>{
  handleSubmit(e);
}
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
  (typeof props?.credentials === undefined)
  ? 
    <Signup handleInputChange={handleInputChange}/>
  : 
    <CredComp handleInputChange={handleInputChange} />    

)

}



const mapStateToProps = ({...state}) => {
    return {
      credentials: state?.credReducer?.cred?.credentials,
      handleInputChange: state?.handleInputChange
    };
  };
  


export default connect(mapStateToProps, { })(SignupR);
