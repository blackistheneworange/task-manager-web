import React from 'react';
import './LoginPage.css'

import {Link} from 'react-router-dom'

function LoginForm(props){
  
  return(
  
    <div className="wrapper">
      <div className="container login">
      <div className="row">
       
        <div className="col-12 col-md-6 offset-md-3 inner">
        
          <Link to="/"><h1 className="title"><i className="fa fa-tasks fa-md"></i> Task Manager</h1></Link>
          
          <div class="form-inner">
          
          <h3>Login</h3>
          <form onSubmit={props.onSubmit}>
            
            <div className="form-group">
               <input value={props.values.email} onChange={props.onChange} className="form-control" name="email" type="email" placeholder="Email..." required/>
            </div>
            
            <div className="form-group">
               <input onChange={props.onChange} className="form-control" name="password" type="password" placeholder="Password..." value={props.values.password} required/>
               
            </div>
            
            {props.loginError?<div className="alert alert-danger">Invalid Credentials</div>:null}
            
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
          </div>
        </div>
      
      </div>
     </div>
    </div>
  )
}

export default LoginForm;