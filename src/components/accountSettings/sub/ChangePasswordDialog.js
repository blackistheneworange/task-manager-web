import React from 'react';

import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Button,TextField} from '@material-ui/core';

import {useStyles} from '../styles/muiStyles';

export default function ChangePasswordDialog(props){
  
  const classes=useStyles();
  
  return(
    
    <Dialog open={props.dialog2Open} onClose={props.handleDialog2Close}>
      <form onSubmit={props.handleChangePassword}>
        <DialogTitle>Confirm Action</DialogTitle>
        
        <div style={{padding:"10px 25px 10px 25px"}}>
         <TextField style={{overflowX:"visible",paddingBottom:"15px"}} type="password" label="Current Password*" name="password" error={props.passwordError} helperText={props.passwordError?"Incorrect Password":null}/>
         <br/>
         <TextField style={{overflowX:"visible",paddingBottom:"15px"}} type="password" label="Set New Password" name="newPassword" error={props.newPasswordError} helperText={props.newPasswordError?"Password doesn't match":null}/>
         <br/>
         <TextField style={{overflowX:"visible",paddingBottom:"15px"}} name="confirmNewPassword" type="password" label="Confirm New Password"/>
        </div>
      
       
        <DialogActions style={{padding:"0 20px 20px 20px"}}>
        
          <Button className={classes.dialogButtonSuccess} variant="contained" onClick={props.handleDialog2Close}>Cancel</Button>
          
          <Button type="submit" variant="contained" className={classes.dialogButtonDanger}>Change Password</Button>
        
        </DialogActions>
      </form>
    </Dialog>
    
  )
  
}