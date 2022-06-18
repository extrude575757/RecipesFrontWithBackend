import { ADD_NEW_CREDS, EDIT_CREDS,GET_CREDS_FAIL } from "../actions/credActions";

const cred = {
   
                credentials: {
                id:0,
                username: '',
                department: 'No Dep',
                password: '',
                role:1,
                isFetching:false,
                error:''
            }
        
};

export const credReducer = (state = cred, action) => {
  
  switch (action.type) {
    case ADD_NEW_CREDS:
      return ({
        
        ...state,
        cred: [
          ...state.credentials, action.payload]
      });

      case EDIT_CREDS:
          return{
            ...state.creds,
            creds: [
              ...state.credentials,
              
              { 
                id: action.payload.id,
                username: action.payload.username, 
                department: action.payload.department,
                password: action.payload.password,
                role: action.payload.role,
            isFetching:true,
            error:'' 
              }
            ]
          };


      case GET_CREDS_FAIL:
          return({
            ...state,
            isFetching: false,
            error:action.payload
          })
    default:
      return state;
  }
};
