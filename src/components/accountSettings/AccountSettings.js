import React,{useState} from 'react';

import AccountSettingsLayout from './sub/AccountSettingsLayout';

export default function TaskSettings(){
  
  //States
  const [dialogOpen,setDialogOpen]=useState(false);
  
  const [dialog2Open,setDialog2Open]=useState(false);
  
  const [passwordError,setPasswordError]=useState(false);
  
  const [newPasswordError,setNewPasswordError]=useState(false);
  
  
  
  //Functions
  function handleDialogOpen(){
    setDialogOpen(true)
  }
  
  function handleDialog2Open(){
    setDialog2Open(true)
  }
  
  function handleDialogClose(){
    setDialogOpen(false)
  }
  
  function handleDialog2Close(){
    setDialog2Open(false)
  }
  
  function handleDeleteAccount(e){
    e.preventDefault();
    if(e.target.password.value===""){
      
      setPasswordError(true)
    }
    else{
      setPasswordError(false)
      setDialogOpen(false)
    }
    
  }
  
  function handleChangePassword(e){
    e.preventDefault();
    if(e.target.password.value===""){
      setPasswordError(true)
    }
    else if(e.target.newPassword.value==="" || e.target.confirmNewPassword.value==="" || e.target.newPassword.value!==e.target.confirmNewPassword.value){
      setNewPasswordError(true);
      setPasswordError(false)
    }
    else{
      setPasswordError(false);
      setNewPasswordError(false)
      setDialog2Open(false)
    }
  }
  
  return(
     <AccountSettingsLayout 
       dialogOpen={dialogOpen}
       handleDialogOpen={handleDialogOpen}
       handleDialogClose={handleDialogClose}
       handleDeleteAccount={handleDeleteAccount}
       passwordError={passwordError}
       
       dialog2Open={dialog2Open}
       handleDialog2Open={handleDialog2Open}
       handleDialog2Close={handleDialog2Close}
       handleChangePassword={handleChangePassword}
       newPasswordError={newPasswordError}
       />
  )
}