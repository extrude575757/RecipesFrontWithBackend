import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";
import {credSignup} from '../../../actions/credActions'; 
const SignupR = ({...props})=>{


// const {handleInputChange,handleSubmit} = props;
const {handleSubmit,handleInputChange} =props;


return (
 < CredComp handleSubmit={handleSubmit}handleInputChange={handleInputChange} />
)

}



const mapStateToProps = (state) => {
    return {
      credentials: state.credReducer.credentials
    };
  };
  


export default connect(mapStateToProps, {})(SignupR);
