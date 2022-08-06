import { credActs, ADD_CREDS,ADD_CRED,ADD_NEW_CREDS,GET_CREDS_FAIL,GET_CREDS_SUCCESS,GET_CREDS_START } from "../actions/credActions";

const cred = {
   
                credentials: [{
                id:10,
                username: 'Dizzy', 
                password: 'passwords',
                department: 'No Dep',
                role:1
            }],
            isFetching:false,
            error:' '
};
export const credReducer = (state = cred, action) => {
  console.log(`NAL: credentials: action: `,cred, action);
  switch (action.type) {



    
   
      case ADD_CREDS:
          return({
            ...state,
            credentials: [
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
          });
      

      case ADD_CRED:
          return({
              ...state,
              credentials: action.payload
            })

      case ADD_NEW_CREDS:
          return({
            ...state,
              credentials: [
                  ...state.credentials, action.payload],
              isFetching:true,
              error:'' 
            });
        

      case GET_CREDS_FAIL:
          return({
            ...state,
            isFetching: false,
            error:action.payload
          })

      case GET_CREDS_SUCCESS:
        return ({
          ...state,
          credentials: [...state.credentials, action.payload],
          isFetching:false,
          error: 'None known of'
        })


      case GET_CREDS_START:
        return ({
          ...state,
          credentials: [{}],
          isFetching: true,
          error: 'we creds start'
        })
    default:
      return state;
  }
};
export default credReducer