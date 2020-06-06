import React from 'react';
import './LoginPage.css'

import {Link} from 'react-router-dom'

function SignupForm(props){
  
  return(
  
    <div className="wrapper">
      <div className="container login">
      <div className="row">
       
        <div className="col-12 col-md-6 offset-md-3 inner">
        
          <Link to="/"><h1 className="title"><i className="fa fa-tasks fa-md"></i> Task Manager</h1></Link>
          
          <div class="form-inner">
          
          <h3>Register</h3>
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
            
            <button type="submit" className="btn btn-success w-100">Register</button>
          </form>
          </div>
        </div>
      
      </div>
     </div>
    </div>
  )
}

export default SignupForm;