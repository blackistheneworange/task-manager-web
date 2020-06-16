import React from 'react';

import {NavLink} from 'react-router-dom'

import {useStyles} from './customStyles/muiStyles';

import {Button,ListItem} from '@material-ui/core';



export default function Links(props){
    
  const classes=useStyles();
    
  const activeStyle={
      color:"lightblue"
    }
  
   return(
     <>
        <NavLink to="/" className={classes.navLink} activeStyle={activeStyle}><Button color="inherit" component="h1">Home</Button></NavLink>


        <NavLink to="/tasks" activeStyle={activeStyle} className={classes.navLink}><Button color="inherit" component="h1">Tasks</Button>
          </NavLink>

         <NavLink to="/archives" activeStyle={activeStyle} className={classes.navLink}><Button color="inherit" component="h1">Archives</Button>
          </NavLink>


        <Button color="inherit" component="h1" onClick={props.handleLogoutClick}>Logout</Button>
        
     </>
    )

}