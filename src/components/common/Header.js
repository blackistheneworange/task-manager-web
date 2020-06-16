<<<<<<< HEAD
import React,{useEffect} from 'react';
=======
import React,{useEffect,useState} from 'react';
>>>>>>> task manager material 1

import {NavLink,Link,useHistory} from 'react-router-dom';

import {connect} from 'react-redux'

import * as sessionActions from '../../redux/actions/sessionActions';


<<<<<<< HEAD
function Header(props){
  
  const history=new useHistory()
  
  const activeStyle={color:"lightblue"}
  
  function handleLogoutClick(){
    props.handleLogout()
  
      history.push('/')

  }
  

  
  return(
    
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm fixed-top">
      
      
      <div className="container-fluid">
      
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
           <span className="navbar-toggler-icon"></span>
         </button>
         
        <Link to="/" className="navbar-brand">Task Manager</Link>
        
        
        <div className="collapse navbar-collapse" id="Navbar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" activeStyle={activeStyle} exact>Home</NavLink>
          </li>
      
          <li className="nav-item">
            <NavLink className="nav-link" to="/tasks" activeStyle={activeStyle}>Tasks</NavLink>
          </li>
          
          <li className="nav-item">
            <NavLink className="nav-link" to="/archives" activeStyle={activeStyle}>Archives
            </NavLink>
          </li>
      
          <li className="nav-item">
            <a onClick={handleLogoutClick} className="nav-link" activeStyle={activeStyle}>Logout</a>
          </li>
        </ul>
        </div>
      
      </div>
      
    </nav>
    
=======

import Links from './Links'

import {useStyles} from './customStyles/muiStyles'


import {Typography,Button,IconButton,AppBar,Toolbar} from '@material-ui/core'

import Drawer from './Drawer';



function Header(props){

  const history=new useHistory();
  
  const classes=useStyles()

  const [open,setOpen]=useState(false);

  const activeStyle={color:"lightblue"}

  function handleLogoutClick(){
    setOpen(false)
    props.handleLogout()
    
      history.push('/')

  }


  function handleMenuClick(){
    setOpen(!open);
  }

 
  return(

     <div className={classes.navbar}>



      <AppBar className={classes.appBar} position="static">

        <Toolbar>
          <IconButton onClick={handleMenuClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <i className="material-icons">menu</i>
          </IconButton>


          <Typography variant="h5" component="h2" className={classes.title} style={{fontFamily:"Raleway"}}>Taskination</Typography>



          <div className={classes.navLinks}>
             
            <Links handleLogoutClick={handleLogoutClick}/>
          
          </div>


        </Toolbar>


       </AppBar>

       <Drawer open={open} handleMenuClick={handleMenuClick} handleLogoutClick={handleLogoutClick}/>

     </div>



>>>>>>> task manager material 1
  )
}

function mapStateToProps(state){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{
    handleLogout(){
<<<<<<< HEAD
      
=======

>>>>>>> task manager material 1
      dispatch(sessionActions.handleLogout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);