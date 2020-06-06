

export default function sessionReducer(state={},action){
  
  
  switch(action.type){
    
    case "HANDLE_LOGIN_SUCCESS":
     
      return {...state,authenticated:true,loginError:false};
    
    case "HANDLE_LOGIN_FAILED":
      return {...state,authenticated:false,loginError:true};
      
    case "HANDLE_VERIFICATION_SUCCESS":
      return {...state,initialVerification:"success",authenticated:true}
      
    case "HANDLE_VERIFICATION_FAILED":
      return {...state,initialVerification:"failed"}
      
    case "HANDLE_SIGNUP_SUCCESS":
      return {...state,registered:true}
      
    case "HANDLE_SIGNUP_FAILED":
      return {...state,registered:false}
      
    case "HANDLE_LOGOUT":
    
      return {...state,authenticated:false}
      
    default:
       return state;
  }
}