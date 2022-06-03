import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";
import {addNewCred } from '../../../actions/credActions'; 
const SignupR = (props)=>{


const {handleChange} = props;

    return(
        <CredComp handleChange={handleChange} />
    )
}



const mapStateToProps = (state) => {
    return {
      creds: state.credReducer.credentials
    };
  };
  


export default connect(mapStateToProps, { addNewCred })(SignupR);
