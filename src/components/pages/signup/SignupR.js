import React from "react";
import CredComp from "../../common/CredComp";
import { connect } from "react-redux";
import {credSignup} from '../../../actions/credActions'; 
const SignupR = ({...props})=>{


const {handleInputChange,handleSubmit,credd} = props;

const submitf = (e) =>{
  handleSubmit(e);
}
const inputChange = (e)=>{
  handleInputChange(e);
}
return (<div>

< CredComp  inputChange={inputChange}/>
</div>
)

}



const mapStateToProps = ({state}) => {
    return {
      credentials: state.credReducer.credentials,
      credSignup: state.credReducer.credSignup,
      inputChange: state.handleInputChange(state),
      submitf: state.handleSubmit(state)
    };
  };
  


export default connect(mapStateToProps, { credSignup})(SignupR);
