import React from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

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
 )
}

function mapStateToProps(state){
  return{
    session:state.session
  }
}
  
export default connect(mapStateToProps)(HomePage);