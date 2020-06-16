import React from 'react';

import {Typography,Grid,Button,Paper,Switch,Table,TableBody,TableCell,TableContainer,TableRow} from '@material-ui/core';

import DeleteAccountDialog from './DeleteAccountDialog';
import ChangePasswordDialog from './ChangePasswordDialog';

import {useStyles} from '../styles/muiStyles'

import {withStyles} from '@material-ui/core/styles'

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


export default function AccountSettingsLayout(props){
  
  const classes=useStyles()
  
  return(
    <Grid container justify="center" style={{paddingTop:"20%",paddingBottom:"76%"}}>
    
    
      <Grid item xs={10} sm={8} md={6} align="center">
         <Paper style={{borderRadius:"20px"}}>
           <Typography align="center" variant="h5" className={classes.pageTitle}>Account Settings</Typography>
         </Paper>
      </Grid>
      
      <Grid style={{marginTop:"25px"}} item xs={12} sm={10} md={7} align="center">
        
        <TableContainer component={Paper}>
          
          <Table>
          
          <TableBody>
          
             <StyledTableRow>
               
               <StyledTableCell component="th" style={{fontWeight:500}} scope="row">Name</StyledTableCell>
               <StyledTableCell>Hari</StyledTableCell>
             </StyledTableRow>

             <StyledTableRow>
               <StyledTableCell style={{fontWeight:500}}>Email</StyledTableCell>
               <StyledTableCell>gdh</StyledTableCell>
             </StyledTableRow>
            
             <StyledTableRow>
               <StyledTableCell colspan="2">
                 <Button onClick={props.handleDialog2Open} className={classes.button} variant="contained" fullWidth>Change Password</Button>
               </StyledTableCell>
             </StyledTableRow>
             
             <StyledTableRow>
               <StyledTableCell colspan="2">
                 <Button className={classes.button} onClick={props.handleDialogOpen} variant="contained" fullWidth>Delete Account</Button>
               </StyledTableCell>
             </StyledTableRow>
             
          
          </TableBody>
          
        </Table>
        
        </TableContainer>
        
        
      </Grid>
      
      <DeleteAccountDialog handleDeleteAccount={props.handleDeleteAccount} handleDialogClose={props.handleDialogClose} dialogOpen={props.dialogOpen} passwordError={props.passwordError}/>
      
      <ChangePasswordDialog handleChangePassword={props.handleChangePassword} handleDialog2Close={props.handleDialog2Close} dialog2Open={props.dialog2Open} passwordError={props.passwordError} newPasswordError={props.newPasswordError}/>
      
    </Grid>
  )
}