import React from 'react';

import {NavLink} from 'react-router-dom'

import {useStyles} from './customStyles/muiStyles';

import {Button,List,ListItem,Divider} from '@material-ui/core';



export default function DrawerLinks(props){
    
  const classes=useStyles();
    
  const activeStyle={
      color:"lightblue"
    }
  
   return(
     <>
        <List>
        
        <ListItem><NavLink to="/" className={classes.drawerNavLink} activeStyle={activeStyle}><Button color="inherit" component="h1">Home</Button></NavLink>
        </ListItem>
       
       
       <ListItem>
        <NavLink to="/tasks" activeStyle={activeStyle} className={classes.drawerNavLink}><Button color="inherit" component="h1">Tasks</Button>
          </NavLink>
       </ListItem>
       
       <ListItem>
         <NavLink to="/archives" activeStyle={activeStyle} className={classes.drawerNavLink}><Button color="inherit" component="h1">Archives</Button>
          </NavLink>
      </ListItem>
      <Divider/>
      <ListItem>
       
        <Button className={classes.drawerNavLink} color="inherit" component="h1" onClick={props.handleLogoutClick}>Logout</Button>
        
      </ListItem>
      
    </List>
        
     </>
    )

}