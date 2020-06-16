import React from 'react';
import './LoginPage.css'

import {Link} from 'react-router-dom'

<<<<<<< HEAD
function LoginForm(props){
  
=======
import {Typography,Button} from '@material-ui/core'

import cx from 'classnames';

import {green} from '@material-ui/core/colors'

import {useStyles} from './customStyles/muiStyles';



function LoginForm(props){
  
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
          
          <h3>Login</h3>
=======
          <div className="title p-3 d-flex align-items-center"><i className="material-icons mr-1 md-48">account_circle</i> <Typography variant="h3">Login</Typography></div>
          
          <div class="form-inner">
          
          
>>>>>>> task manager material 1
          <form onSubmit={props.onSubmit}>
            
            <div className="form-group">
               <input value={props.values.email} onChange={props.onChange} className="form-control" name="email" type="email" placeholder="Email..." required/>
            </div>
            
            <div className="form-group">
               <input onChange={props.onChange} className="form-control" name="password" type="password" placeholder="Password..." value={props.values.password} required/>
               
            </div>
            
            {props.loginError?<div className="alert alert-danger">Invalid Credentials</div>:null}
            
<<<<<<< HEAD
            <button type="submit" className="btn btn-success w-100">Login</button>
=======
            <button type="submit" style={{border:"none",outline:"none"}} className="w-100 p-0 m-0"><Button className={cx(classes.actionButton,"w-100")} variant="contained">Login</Button></button>
            
            <div className="mt-1">
            <Typography variant="p">New user? <Link to="/signup">Register</Link></Typography>
          
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

export default LoginForm;