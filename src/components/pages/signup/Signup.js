import React, {useState} from "react";
import CredComp from "./CredComp";
import { connect } from "react-redux";
import SignupR from "./SignupR";
import {credActs} from '../../../state/actions'; 
import Formcomp from "../../common/Formcomp";
import { Link, useHistory } from 'react-router-dom';
const Signup = ({isFetching})=>{
  const { push } = useHistory();
const [fetched,setFetched] = useState(false);
// const {credd, isFetching,credentials} = {...props};

//   const submitit = (e,n) => {
//     // e.preventDefault();
//     // credSignup(credd.credentials[0]);
//     // console.log(props,'submit state'+credd) ;
//     // push('/login/');
// console.log('handling submit',n)
// isFetching = true;
//       if(isFetching){
//        e.preventDefault();
//        credSignup(credentials);
//        console.log(props,'submit state'+credd) ;
//        push('/login/');
//        isFetching = false;
//         // handleInputChange(e);
//       }else{
//        console.log(credd,n,'didnwork') 
//     console.log(credd)
//       }

//    }
   
    // useEffect(()=>{

    //   try{
    //     if(typeof isFetching === undefined  ){
  
        
    //       props.isFetching = false;
    //   }else if(typeof credentials === undefined){
    //     console.log('error creds')
    //   }
   
    //   }catch(e){
    //     console.log(e);
    //   }
  
    // }, [{props}]);



// const inputChange = (e)=>{
//   try{
//     if(typeof credd?.credentials[0] !== undefined){
//       console.log(credd?.credentials[0]);
  
//     props?.handleInputChange(e)
//     }
  
//   }
//   catch(e){
//     console.log(e);
//   }
// }


// const wozer = () =>{
// credentials.username = 'snakes'
//   // props.cred.credReducer.credentials[0].username = 'hi'
//   console.log('beat',credentials,
//   // props.cred.credReducer.credentials[0].username
//   )
// }
 let shoot = () =>{
  // isFetching  = false
 
    <div>{isFetching}
    now loading
    </div>
  
}
return (
     typeof fetched !== undefined && fetched === false ? 
     <SignupR  isFetching={fetched} />
     : <shoot />

)

}
export default connect(
  state => ({
    isFetching: state.credReducer.isFetching
  }),
  {}
)(Signup)




