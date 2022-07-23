import React, {useState,useEffect}  from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {addNewCred,credSignup } from '../../../state/actions/credActions'
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { Signup} from ".";
import Formcomp from "../../common/Formcomp"
const CredComp =(props) =>{
  const {credentials,inputChange,submitf,isFetching} = props;
  const {username,password,department,role} = credentials;

    return (

      !isFetching && isFetching !== undefined &&
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

 