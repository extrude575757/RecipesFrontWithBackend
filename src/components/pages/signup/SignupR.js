import React from "react";
import CredComp from "../../common/CredComp";
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
return (<div>

< CredComp />
</div>
)

}



const mapStateToProps = (state) => {
    return {
      credentials: state.credReducer.credentials
    };
  };
  


export default connect(mapStateToProps, { credSignup})(SignupR);
