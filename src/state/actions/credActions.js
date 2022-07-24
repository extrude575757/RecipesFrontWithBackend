export const ADD_NEW_CREDS = "ADD_NEW_CREDS"  ;
export const  ADD_CREDS   = "ADD_CREDS";
export const GET_CREDS_FAIL = "GET_CREDS_FAIL";
export const ADD_CRED = "ADD_CRED";
import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';
export const addNewCred = (cred)=>{
    try{
        if(cred !== undefined || cred !==  {} || cred !== null ){
            console.log('addnew',cred)
        dispatch ({
            type: ADD_NEW_CREDS,
            payload: cred
    
        });
        }else{
            dispatch(addCred(cred));
        }
    }
    catch(e){
        console.log(e);
        dispatch(signupFail(err));
    }
}

export const credSignup = (cred)=>{
    return (dispatch)=> {
        // const credd ={ credentials: {
        //     username: 'Ithink',
        //     department: 'No Dep',
        //     password: 'Doitagain',
        //     role:1
        //   }}
       // e.preventDefault();
        axios().post("/auth/register/",cred.credentials)
          .then(res => {
            console.log('nal: credsignup.js: login: res: ', res, req)
            localStorage.setItem('token', req.config.data, cred.credentials.username)
            
            dispatch(postAddSignup(req.data.credentials));
            props.history.push('/login');
          })
          .catch(err => {
            console.error(err.response);
            dispatch(signupFail(err));
          })
      };
}

export const addcred = (cred)=>{
    return (
        {
            type: ADD_CRED,
            payload: cred
        }
    )
}

export const addCred = ({cred})=>{
    return( {
        type: ADD_CREDS,
        payload: cred

    })
}

export const postAddSignup = (cred) =>{
    return({type: ADD_NEW_CREDS, payload:cred});
}

export const signupFail = (error)=> {
    return({type: GET_CREDS_FAIL, payload: error});
  }