import { ADD_NEW_CREDS, EDIT_CREDS,GET_CREDS_FAIL } from "../actions/credActions";

const cred = {
   
                credentials: {
                id:0,
                username: '', 
                password: '',
                department: 'No Dep',
                role:1
            },
            isFetching:false,
            error:''
};

export const credReducer = (state = cred, action) => {
  
  switch (action.type) {
    case ADD_NEW_CREDS:
      return({
        credentials: [
          ...state.credentials, action.payload
        ]
      });

      case EDIT_CREDS:
          return{
            ...state,
            credentials: [
              ...state.credentials,
              
              { 
                id: action.payload.id,
                username: action.payload.username, 
                password: action.payload.password,
                department: action.payload.department,
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
