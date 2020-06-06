import React,{useState} from 'react';
import {connect} from 'react-redux';

import * as taskActions from '../../redux/actions/taskActions'

import {useHistory} from 'react-router-dom';

import TaskForm from './TaskForm';

function AddTask(props){
  
  const history=new useHistory();
  
  const [inputs,setInputs]=useState({
    name:"",
    label:"",
    dueDate:"",
    status:"New"
  })
  
  function handleChange(e){
    
    setInputs({...inputs,[e.target.name]:e.target.value})
    
  }
  
  function handleSubmit(e){
    e.preventDefault();
  
    props.createNewTask(inputs)
    
    
    history.push('/tasks')
    
  }
  
  return(
    <div className="mt-5 container">
      <h1>Add New Task</h1>
      <TaskForm values={inputs} onChange={handleChange} onSubmit={handleSubmit}/>
      
    </div>
  )
}

function mapStateToProps(state){
  return{}
}

function mapDispatchToProps(dispatch){
  return{
    createNewTask(task){
      dispatch(taskActions.createTask(task))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTask);