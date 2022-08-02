import React from "react";
import CredComp from "./CredComp";
import { connect } from "react-redux";
import SignupR from "./SignupR";
import {credSignup} from '../../../state/actions/credActions'; 
import Formcomp from "../../common/Formcomp";
const signup = ({...props})=>{


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
    <SignupR handleInputChange={handleInputChange}/>  

)

}



const mapStateToProps = ({...state}) => {
    return {
      credentials: state?.credReducer?.cred?.credentials,
      handleInputChange: state?.handleInputChange
    };
  };
  


export default connect(mapStateToProps, { })(signup);
