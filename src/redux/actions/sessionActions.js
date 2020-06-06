import axios from 'axios';

import * as taskActions from './taskActions';



export function handleLoginSuccess(){
  
  return{
    type:"HANDLE_LOGIN_SUCCESS"
  }
}

export function handleVerificationSuccess(){
  return{
    type:"HANDLE_VERIFICATION_SUCCESS"
  }
}

export function handleVerificationFailed(){
  return{
    type:"HANDLE_VERIFICATION_FAILED"
  }
}

export function handleLoginFailed(){
  
  return{
    type:"HANDLE_LOGIN_FAILED"
  }
}

export function handleSignupSuccess(){
  return{
    type:"HANDLE_SIGNUP_SUCCESS"
  }
}

export function handleSignupFailed(){
  return{
    type:"HANDLE_SIGNUP_FAILED"
  }
}

export function handleLogoutSuccess(){
  return{
    type:"HANDLE_LOGOUT"
  }
}



export function handleLogin(inputs){
  
  return function(dispatch){
      
     axios.post('/auth/login',inputs)
     .then((res)=>{
       dispatch(handleLoginSuccess())
     },(err)=>{
       dispatch(handleLoginFailed())
     })
     .catch(err=>{
       dispatch(handleLoginFailed())
     })
  
  }
  
  
}

export function handleSignup(inputs){
  return function(dispatch){
    
     axios.post('/auth/register',inputs)
     .then((res)=>{
       dispatch(handleSignupSuccess())
     
       
     },(err)=>{
       dispatch(handleSignupFailed())
     })
     
    
  }
}

export function initialVerification(){
  return function(dispatch){
    
    axios.post('/auth/verify',"")
    .then((res)=>{
      dispatch(handleVerificationSuccess());
    },(err)=>{
      dispatch(handleVerificationFailed())
    })
    
    .catch(err=>{
      dispatch(handleVerificationFailed())
    })
    
  }
}

export function handleLogout(){
  return function(dispatch){
      axios.post('/auth/logout',"")
     .then((res)=>{
       dispatch(handleLogoutSuccess());
       dispatch(taskActions.clearStateTasks())
     })
  }
}