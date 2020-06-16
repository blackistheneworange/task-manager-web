import React from 'react';

import {Typography,Grid,Paper,Switch} from '@material-ui/core';

import {useStyles} from '../styles/muiStyles'

export default function TaskSettingsLayout(){
  
  const classes=useStyles()
  
  return(
    <Grid container justify="center" style={{paddingTop:"31%",paddingBottom:"78%"}}>
    
    
      <Grid item xs={10} sm={8} md={6} align="center">
         <Paper style={{borderRadius:"20px"}}>
           <Typography align="center" variant="h5" className={classes.pageTitle}>Task Settings</Typography>
         </Paper>
      </Grid>
      
      <Grid style={{marginTop:"30px"}} item xs={12} align="center">
        
        <Typography style={{fontWeight:500}} variant="span">Enable Email Notifications&nbsp;</Typography>
        
        <Switch inputProps={{'aria-label':'primary checkbox'}}/>
        
        
      </Grid>
      
      <Grid item xs={12} align="center">
      
        <Typography style={{fontWeight:500}} variant="span">Enable SMS Notifications&nbsp;&nbsp;</Typography>
        
        <Switch inputProps={{'aria-label':'primary checkbox'}}/>
        
      </Grid>
      
      <Grid item xs={12} align="center">
      
         <Typography style={{fontWeight:500}} variant="span">Delete Completed Tasks Permanently&nbsp;&nbsp;</Typography>
         <Switch inputProps={{'aria-label':'primary checkbox'}}/>
      </Grid>
    
    </Grid>
  )
}