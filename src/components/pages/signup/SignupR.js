import React from "react";
import CredComp from "./CredComp";
import { connect } from "react-redux";
import {credSignup} from '../../../state/actions/credActions'; 
const SignupR = ({...props})=>{


const {handleInputChange,handleSubmit,credd} = props;

const submitf = (e) =>{
  handleSubmit(e);
}
const inputChange = (e)=>{
  console.log(credd);
  handleInputChange(e);
}
return (

<CredComp />
)

}



const mapStateToProps = (state) => {
    return {
      credentials: state.credReducer.credentials[0]
    };
  };
  


export default connect(mapStateToProps, { })(SignupR);
