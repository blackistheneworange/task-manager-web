import React,{useState,useEffect} from 'react';

import {useHistory} from 'react-router-dom';
import * as sessionActions from '../../redux/actions/sessionActions'

import LoginForm from './LoginForm'

import {connect} from 'react-redux'

function LoginPage(props){

  const [inputs,setInputs]=useState({
    email:"",
    password:""
  })
  
  const [error,setError]=useState(false)
  
  const history=new useHistory();
  
  function handleChange(e){
    
    setInputs({...inputs,[e.target.name]:e.target.value})
    
  }
  
 
    useEffect(()=>{
     if(props.session.authenticated){
      
    
       history.push('/tasks')
  
    }
    else if(props.session.loginError){
    
      setError(true)
    }
    
    },[props.session.authenticated,props.session.loginError])
    
    
  function handleSubmit(e){
    e.preventDefault();
    props.handleLogin(inputs)
  
    
  }
    
    
  
  return(
    
    <LoginForm onSubmit={handleSubmit} values={inputs} onChange={handleChange} loginError={error}/>
  )
}

function mapStateToProps(state){
  return {
    session:state.session
  }
}

function mapDispatchToProps(dispatch){
  return{
    handleLogin(inputs){
      
      dispatch(sessionActions.handleLogin(inputs));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);