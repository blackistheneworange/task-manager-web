import React from 'react';

import {Link} from 'react-router-dom';

function Footer(){
  
  
  return(
    
    <div className="container-fluid text-white bg-dark p-4 m-0">
    
      <div className="row justify-content-around">
      
        <ul className="nav flex-column">
          <li><Link className="nav-item text-white" to="/">About</Link></li>
          <li><Link className="text-white nav-item" to="/">Privacy Policy</Link></li>
          <li><Link className="text-white nav-item" to="/">Terms Of Use</Link></li>
        </ul>
        
        <ul className="nav flex-column">
          <li><a href="https://www.github.com" className="nav-item text-white">Github</a></li>
          <li><a href="" className="nav-item text-white">LinkedIn</a></li>
        </ul>
      
      </div>
      
      <center style={{marginTop:20}}><small>Task Manager &copy; Copyright 2020</small></center>
    
    </div>
    
  )
  
}

export default Footer;