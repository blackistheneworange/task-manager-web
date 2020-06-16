import axios from 'axios';

import * as taskActions from './taskActions';

<<<<<<< HEAD
=======
let url="";let options={};

if(process.env.NODE_ENV==="development"){
  url="http://localhost:3000";
  options={withCredentials:true}
}
>>>>>>> task manager material 1


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
      
<<<<<<< HEAD
     axios.post('/auth/login',inputs)
=======
     axios.post(url+'/auth/login',inputs,options)
>>>>>>> task manager material 1
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
    
<<<<<<< HEAD
     axios.post('/auth/register',inputs)
=======
     axios.post(url+'/auth/register',inputs,options)
>>>>>>> task manager material 1
     .then((res)=>{
       dispatch(handleSignupSuccess())
     
       
     },(err)=>{
       dispatch(handleSignupFailed())
     })
     
    
  }
}

export function initialVerification(){
  return function(dispatch){
    
<<<<<<< HEAD
    axios.post('/auth/verify',"")
=======
    axios.post(url+'/auth/verify',"",options)
>>>>>>> task manager material 1
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
<<<<<<< HEAD
      axios.post('/auth/logout',"")
=======
      axios.post(url+'/auth/logout',"",options)
>>>>>>> task manager material 1
     .then((res)=>{
       dispatch(handleLogoutSuccess());
       dispatch(taskActions.clearStateTasks())
     })
  }
}