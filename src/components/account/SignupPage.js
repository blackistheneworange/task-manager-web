import React,{useState,useEffect} from 'react';

import {useHistory} from 'react-router-dom';
import * as sessionActions from '../../redux/actions/sessionActions'

import SignupForm from './SignupForm'

import {connect} from 'react-redux'

function SignupPage(props){
  
  const [inputs,setInputs]=useState({
    name:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  
  const [error,setError]=useState()
  
  const history=new useHistory();
  
  function handleChange(e){
    
    setInputs({...inputs,[e.target.name]:e.target.value})
    
  }
  

    useEffect(()=>{
     if(props.session.registered){
      
    
       history.push('/login')
  
    }
    else if(props.session.authenticated){
      history.push('/')
    }
    else if(props.session.registered===false){
    
      setError("Registration Failed")
    }
    
    },[props.session.registered])
    
    
  function handleSubmit(e){
    e.preventDefault();
    
    if(inputs.password!==inputs.confirmPassword){
      setError("Password doesn't match")
    }
    else{
      props.handleSignup(inputs)
    }
  
    
  }
    
    
  
  return(
    
    <SignupForm onSubmit={handleSubmit} values={inputs} onChange={handleChange} signupError={error}/>
  )
}

function mapStateToProps(state){
  return {
    session:state.session
  }
}

function mapDispatchToProps(dispatch){
  return{
    handleSignup(inputs){
      
      dispatch(sessionActions.handleSignup(inputs));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignupPage);