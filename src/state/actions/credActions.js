

import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
export const addNewCred = cred => dispatch =>{
    try{
        if(typeof cred !== undefined || cred !==  {} || cred !== null ){
            console.log('addnew',cred)
        dispatch ({
            type: ADD_NEW_CREDS,
            payload:{ ...cred ,[cred?.target?.name]: cred?.target?.value}
    
        });

        console.log('addnew',cred)
        }
        // else{
        //     return (dispatch) =>{
        //         dispatch(addCred(cred));
        //     }
           
        // }
    }
    catch(e){
        console.log(e);
        dispatch(signupFail(err));
    }
};

export const credSignup = cred => dispatch =>{
    return dispatch  => {
        // const credd ={ credentials: {
        //     username: 'Ithink',
        //     department: 'No Dep',
        //     password: 'Doitagain',
        //     role:1
        //   }}
       // e.preventDefault();
       console.log("credsignup",cred)
        axios().post("https://backrecipes.herokuapp.com/api/auth/register/",cred)
          .then(res => {
            console.log('nal: credsignup.js: login: res: ', res, req)
            localStorage.setItem('token', req.config.data, cred.username)
            
            dispatch(postAddSignup(cred));
            props.history.push('/login');
          })
          .catch(err => {
            console.error(err.response);
            dispatch(signupFail(err));
          })
      };
};
export const ADD_CRED = "ADD_CRED";
export const addcred = cred => dispatch =>{
    dispatch (
        {
            type: ADD_CRED,
            payload: cred
        }
    )
};
export const  ADD_CREDS   = 'ADD_CREDS';
export const addCred = cred => dispatch =>{
    dispatch( 
        {
        type: ADD_CREDS,
        payload: cred

    }
    )
};
export const GET_CREDS_SUCCESS = "GET_CREDS_SUCCESS"; 
export const getCredsSuccess = creds => dispatch => {
    dispatch({type: GET_CREDS_SUCCESS, payload: creds});
  }; 
  
export const GET_CREDS_START ="GET_CREDS_START";
export const getCredStart = () => dispatch =>{
    dispatch({type:GET_CREDS_START})
};
export const ADD_NEW_CREDS = "ADD_NEW_CREDS"  ;
export const postAddSignup = cred => dispatch =>{
    dispatch({type: ADD_NEW_CREDS, payload:cred});
};
export const GET_CREDS_FAIL = "GET_CREDS_FAIL";
export const signupFail = error => dispatch => {
    dispatch({type: GET_CREDS_FAIL, payload: error});
  };