export const ADD_NEW_CREDS = "ADD_NEW_CREDS"  ;
export const  EDIT_CREDS   = "EDIT_CREDS";
export const GET_CREDS_FAIL = "GET_CREDS_FAIL";
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
export const addNewCred = (cred)=>{
    try{
        if(cred !== undefined ){
            console.log('addnew'+cred.department)
        return ({
            type: ADD_NEW_CREDS,
            payload: cred
    
        })
        }
    }
    catch(e){
        console.log(e);
        dispatch(signupFail(err));
    }
}

export const credSignup = (cred)=>{
    return (dispatch)=> {
        const credd ={ credentials: {
            username: 'Ithink',
            department: 'No Dep',
            password: 'Doitagain',
            role:2
          }}
       // e.preventDefault();
        axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/register/", credd)
          .then(res => {
            console.log('bk: Login.js: login: res: ', res)
            localStorage.setItem('token', res.config.data)
            props.history.push('/protected')
            dispatch(postAddSignup(cred));
          })
          .catch(err => {
            console.error(err.response);
            dispatch(signupFail(err));
          })
      };
}


export const editCred = (cred)=>{
    return( {
        type: EDIT_CREDS,
        payload: cred

    })
}

export const postAddSignup = (cred) =>{
    return({type: ADD_NEW_CREDS, payload:cred});
}

export const signupFail = (error)=> {
    return({type: GET_CREDS_FAIL, payload: error});
  }