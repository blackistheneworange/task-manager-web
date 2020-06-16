import React from 'react';

import {Dialog,DialogActions,DialogContent,DialogContentText,DialogTitle,Button} from '@material-ui/core';

import {useStyles} from '../styles/muiStyles';

export default function DeleteTaskDialog(props){
  
  const classes=useStyles();
  
  return(
    
    <Dialog open={props.dialogOpen} onClose={props.handleDialogClose}>
    
        <DialogTitle>Confirm Action</DialogTitle>
        
        <DialogContent>
         <DialogContentText>Are you sure you want to delete this task? Task once deleted cannot be recovered!</DialogContentText>
        </DialogContent>
       
        <DialogActions>
        
          <Button className={classes.dialogButtonSuccess} variant="contained" onClick={props.handleDialogClose}>Cancel</Button>
          
          <Button variant="contained" className={classes.dialogButtonDanger} onClick={props.handleDeleteTask}>Delete</Button>
        
        </DialogActions>
    
    </Dialog>
    
  )
  
}