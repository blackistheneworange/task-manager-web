import React from 'react';

import {Drawer,Typography,Button,List,ListItem,IconButton} from '@material-ui/core';

import {useStyles} from './customStyles/muiStyles';

import DrawerLinks from './DrawerLinks'




export default function MenuDrawer(props){
  
  const classes=useStyles();
  
  return(
    
    
    <Drawer className={classes.drawer} anchor="left" open={props.open} classes={{paper:classes.drawerPaper}}>
    
      <div className={classes.drawerHeader}>
       <IconButton onClick={props.handleMenuClick}>
        <i className="material-icons">arrow_back</i>
       </IconButton>
      </div>
    
      <DrawerLinks handleLogoutClick={props.handleLogoutClick}/>
    
    </Drawer>
    
  )
}