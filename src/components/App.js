import React,{useEffect} from 'react';

import HomePage from './home/HomePage';
import ArchivesPage from './archives/ArchivesPage';
import TaskPage from './tasks/TaskPage';
import PageNotFound from './PageNotFound';
import Header from './common/Header'
import AddTask from './tasks/AddTask';
import LoginPage from './account/LoginPage';
import SignupPage from './account/SignupPage'
import Footer from './common/Footer'

import configureStore from '../redux/configureStore';
import {connect} from 'react-redux';
import * as sessionActions from '../redux/actions/sessionActions'


import './App.css'

import {Switch,Route,Redirect} from 'react-router-dom'

function App(props){
  
  
  
  const RouteGuard=Component=>({match})=>{
    
    if(props.session.initialVerification && !props.session.authenticated){
      return <Redirect to="/"/>
    }
    
    return <Component match={match}/>
    
  }
  
  useEffect(()=>{
    
    props.initialVerification()
  },[])
  
  
  

  return(
    
    
    <>
  
       {props.session.authenticated?<Header/>:null}
       
       <Switch>
         
         <Route exact path="/" render={()=><HomePage/>}/>
         <Route path="/login" component={LoginPage}/>
         <Route path="/signup" component={SignupPage}/>
         <Route path="/archives" render={RouteGuard(ArchivesPage)}/>
         <Route exact path="/tasks" render={RouteGuard(TaskPage)}/>
         <Route exact path="/add-task" render={RouteGuard(AddTask)}/>
         
         <Route component={PageNotFound}/>
       
       </Switch>
       
       <Footer/>
    
    
    </>
    
  )
}

function mapStateToProps(state){
  return{
    session:state.session
  }
}

function mapDispatchToProps(dispatch){
  return{
    initialVerification(){
      dispatch(sessionActions.initialVerification())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);