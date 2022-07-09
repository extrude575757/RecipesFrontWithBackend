import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";
import SubmitReg from "../../common/SubmitReg"
import {credSignup} from '../../../actions/credActions'; 
const Submitr = (props)=>{


// const {handleInputChange,handleSubmit} = props;
const {handleSubmit,handleInputChange} =props;


return (
 < SubmitReg />
)

}



const mapStateToProps = (state) => {
    return {
      credentials: state.credReducer.credentials
    };
  };
  


export default connect(mapStateToProps, {})(Submitr);
