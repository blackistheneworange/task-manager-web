import React from 'react';
import './LoginPage.css'

import {Link} from 'react-router-dom'

<<<<<<< HEAD
function SignupForm(props){
  
=======
import {useStyles} from './customStyles/muiStyles';

import cx from 'classnames';

import {Button,Typography} from '@material-ui/core'

function SignupForm(props){
  
  const classes=useStyles()
  
>>>>>>> task manager material 1
  return(
  
    <div className="wrapper">
      <div className="container login">
      <div className="row">
       
        <div className="col-12 col-md-6 offset-md-3 inner">
        
<<<<<<< HEAD
          <Link to="/"><h1 className="title"><i className="fa fa-tasks fa-md"></i> Task Manager</h1></Link>
          
          <div class="form-inner">
          
          <h3>Register</h3>
=======
          <div className="title p-3 d-flex align-items-center"><i className="material-icons mr-1 md-48">fingerprint</i><Typography variant="h3"> Register</Typography></div>
          
          <div class="form-inner">
          
        
>>>>>>> task manager material 1
          <form onSubmit={props.onSubmit}>
            
            <div className="form-group">
              <input type="text" value={props.values.name} onChange={props.onChange} className="form-control" name="name" placeholder="Enter your name..." required/>
            </div>
            
            <div className="form-group">
               <input value={props.values.email} onChange={props.onChange} className="form-control" name="email" type="email" placeholder="Enter a valid Email..." required/>
            </div>
            
            <div className="form-group">
               <input onChange={props.onChange} className="form-control" name="password" type="password" placeholder="Password..." value={props.values.password} required/>
               
            </div>
            
            <div className="form-group">
              <input onChange={props.onChange} className="form-control" name="confirmPassword" type="password" placeholder="Confirm password..." value={props.values.confirmPassword} required/>
            </div>
            
            {props.signupError?<div className="alert alert-danger">{props.signupError}</div>:null}
            
<<<<<<< HEAD
            <button type="submit" className="btn btn-success w-100">Register</button>
=======
            <button style={{outline:"none",border:"none"}} type="submit" className="w-100 p-0 m-0"><Button variant="contained" className={cx("w-100",classes.actionButton)}>Register</Button></button>
            
            <div className="mt-1">
            <Typography variant="p">Already have an account? <Link to="/login">Login</Link></Typography>
            </div>
>>>>>>> task manager material 1
          </form>
          </div>
        </div>
      
      </div>
     </div>
    </div>
  )
}

export default SignupForm;