export const ADD_NEW_CREDS = "ADD_NEW_CREDS"  ;
export const  EDIT_CREDS   = "EDIT_CREDS";
export const GET_CREDS_FAIL = "GET_CREDS_FAIL";
// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
export const addNewCred = (cred)=>{
    return {
        type: ADD_NEW_CREDS,
        payload: cred

    }
}

export const credSignup = (cred)=>{
    return (dispatch)=> {



        // console.log('addSignup ' +creds.username);
        // axios.post("https://movie-kdb.herokuapp.com/api/movie/", movie)
        // .then(resp =>{
        //     console.log('nal resp movieActino 34 addmovie ',resp.data);
        //     dispatch(postAddMovie(movie))
        // })
        // .catch(er =>{
        //     dispatch(getMoviesFail(err));
        //     console.log(er);
        // })



        e.preventDefault();
        axiosWithAuth().post("https://backrecipes.herokuapp.com/api/auth/register", credentials)
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
    return {
        type: EDIT_CREDS,
        payload: cred

    }
}

export const postAddSignup = (cred) =>{
    return({type: ADD_NEW_CREDS, payload:cred});
}

export const signupFail = (error)=> {
    return({type: GET_CREDS_FAIL, payload: error});
  }