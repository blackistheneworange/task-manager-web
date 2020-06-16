import React from 'react';

import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Button,TextField} from '@material-ui/core';

import {useStyles} from '../styles/muiStyles';

export default function DeleteAccountDialog(props){
  
  const classes=useStyles();
  
  return(
    
    <Dialog open={props.dialogOpen} onClose={props.handleDialogClose}>
      <form onSubmit={props.handleDeleteAccount}>
        <DialogTitle>Confirm Action</DialogTitle>
        
        <DialogContent>
         <TextField style={{overflowX:"visible"}} type="password" variant="outlined" label="Current Password*" name="password" error={props.passwordError} helperText={props.passwordError?"Incorrect Password":null}/>
         <DialogContentText style={{marginTop:"10px"}}>Are you sure you want to delete your account? These changes cannot be reverted back!</DialogContentText>
        </DialogContent>
       
        <DialogActions>
        
          <Button className={classes.dialogButtonSuccess} variant="contained" onClick={props.handleDialogClose}>Cancel</Button>
          
          <Button type="submit" variant="contained" className={classes.dialogButtonDanger}>Delete</Button>
        
        </DialogActions>
      </form>
    </Dialog>
    
  )
  
}