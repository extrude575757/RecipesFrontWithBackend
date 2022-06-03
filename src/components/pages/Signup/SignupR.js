import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";

const SignupR = (props)=>{




    return(
        <CredComp />
    )
}



export default connect(mapStateToProps, { addNewCred })(SignupR);
