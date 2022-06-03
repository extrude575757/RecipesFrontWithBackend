import { ADD_NEW_CREDS, EDIT_CREDS,GET_CREDS_FAIL } from "../actions/credActions";

const cred = {
    creds: [
            {   
                credentials: {

                username: '',
                department: 'No Dep',
                password: '',
                role:1
            }
        }
  ]
};

export const credReducer = (state = cred, action) => {
  
  console.log(`NAL: credsReducer:`, action);
  switch (action.type) {
    case ADD_NEW_CREDS:
      return {
        
          ...state,
        creds: [
          ...state.credentials,
          
          {
            id: action.payload.id,
            username: action.payload.username, 
            department: action.payload.department,
            password: action.payload.password,
            role: action.payload.role 
          }
        ],
        isFetching:true,
        error:''
      };

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
                role: action.payload.role 
              }
            ],
            isFetching:true,
            error:''
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
