<<<<<<< HEAD
import React from 'react';
=======
import React,{useState,useEffect} from 'react';
>>>>>>> task manager material 1

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

<<<<<<< HEAD
import './HomePage.css'

const HomePage=(props)=>{



 return(
  <div className="overlay">
  <div className="main text-center text-white">
    <span className="fa fa-tasks fa-3x"></span>
    <br/>
    <h1>Task Manager</h1>
    <p>Manage your daily tasks on the go!</p>
    
    <div className="buttons justify-content-center">
    <div className="row">
    
    {props.session.authenticated
    ?
    <Link to="/tasks" className="col-12 btn btn-outline-warning">Get Started</Link>
    :
    <>
    <Link to="/login" className="col-12 btn btn-outline-warning"><i className="fa fa-sign-in fa-lg"></i> Login</Link>
    <Link to="/signup" className="col-12 btn btn-outline-warning mt-2"><i className="fa fa-user-plus fa-lg"></i> Sign Up</Link>
    </>
    }
    </div>
    </div>
    
  </div>
  
  </div>
=======
import UserDashboard from './UserDashboard';

import cx from 'classnames';

import './customStyles/HomePage.css';


import {useStyles} from './customStyles/muiStyles';

import {Typography,Button,Grow,Zoom} from '@material-ui/core';



const mainTexts=[{
  name:"CREATE.",
  timeout:1000,
  variant:"h3",
 
},{
  name:"MANAGE.",
  timeout:1900,
  variant:"h3",
  
},{
  name:"COMPLETE.",
  timeout:2800,
  variant:"h3",
 
},{
  name:"TASKS",
  timeout:3400,
  variant:"h4",

},{
  name:"ON THE GO...",
  timeout:4000,
  variant:"p",
  
}]

const HomePage=(props)=>{
 
 const classes=useStyles();
 
 
 const styles={
   
   fontFamily:'Coda,Roboto,sans-serif'
 }

 return(
   
   <>
    
  <UserDashboard/>
   
   {/*<div className={classes.overlay}>
     
     <div className="container">
     
     
      <div className="row">
      
        
        <div className="col-12 col-md-6">
        
       
          
        {mainTexts.map((text)=>(
          
          <Grow in={true} style={{transformOrigin:'-400px 0 0'}} timeout={text.timeout}>
             <Typography 
             
               className={text.name==="TASKS"?classes.subText:text.name==="ON THE GO..."?classes.subText2:classes.introText}
               
               variant={text.variant}>
               
               {text.name}
             </Typography>
           </Grow>
        ))}
           
           
        
        </div>
        
        <Zoom in={true} timeout={250}>
        
        <div className="col-12 col-md-6 mt-md-0 accountButtons">
           
           <Typography variant="h4" className="sideText text-center">GET STARTED </Typography>
          <Link to="/signup" className="sideText"><Button variant="contained" className={cx("w-100","accountButton",classes.sideText)}>REGISTER</Button></Link>
          <Link to="/login" className="sideText"><Button variant="contained" className={cx("w-100","accountButton",classes.sideText)}>LOGIN</Button>
          </Link>
        </div>
        
        </Zoom>
     
     </div>
     
    </div>
     
  
  </div>*/}
  </>
>>>>>>> task manager material 1
 )
}

function mapStateToProps(state){
  return{
    session:state.session
  }
}
  
export default connect(mapStateToProps)(HomePage);