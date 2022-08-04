import React from "react";
import CredComp from "./CredComp";
import { connect } from "react-redux";
import SignupR from "./SignupR";
import {credSignup} from '../../../state/actions/credActions'; 
import Formcomp from "../../common/Formcomp";
const signup = ({...props})=>{


const {handleInputChange,credd} = {...props};

  const handleSubmit = (e) => {
    e.preventDefault();
    props.credSignup(credd);
    console.log(props,'submit state'+credd) ;
    push('/login/');
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
    <SignupR handleSubmit={handleSubmit}/>  

)

}



const mapStateToProps = ({...state}) => {
    return {
      credentials: state?.credReducer?.cred?.credentials,
      handleSubmit: state.handleSubmit
    };
  };
  


export default connect(mapStateToProps, { })(signup);
