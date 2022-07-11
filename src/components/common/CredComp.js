import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addNewCred,credSignup } from '../../actions/credActions'
import axiosWithAuth from "../../utils/axiosWithAuth";
import { Signup} from "../pages/signup";
import Formcomp from "./Formcomp"
const CredComp =(props) =>{
  const {credentials,inputChange,submitf} = props;
  const {username,password,department,role} = credentials;

    return (
       <Formcomp 
       username={username} 
       password={password} department={department}
       role={role}
       />
    )


}


const mapStateToProps = (state) => {
  return {
    credentials: state.credReducer.credentials,
    credSignup: state.credReducer.credSignup
  };
};


export default connect(mapStateToProps, { credSignup })(CredComp);

 