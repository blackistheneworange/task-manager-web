import React,{useEffect} from 'react';

import {NavLink,Link,useHistory} from 'react-router-dom';

import {connect} from 'react-redux'

import * as sessionActions from '../../redux/actions/sessionActions';


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
    
  )
}

function mapStateToProps(state){
  return{

  }
}

function mapDispatchToProps(dispatch){
  return{
    handleLogout(){
      
      dispatch(sessionActions.handleLogout())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);