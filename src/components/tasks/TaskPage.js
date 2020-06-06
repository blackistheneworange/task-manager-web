import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

import * as taskActions from '../../redux/actions/taskActions'

import TaskForm from './TaskForm';

import {Link} from 'react-router-dom';

function TaskPage(props){
  
  const [tasks,setTasks]=useState([])
  
  const [archived,setArchived]=useState(false)
  
  
  useEffect(()=>{
    
    if(props.tasks.length===0){
      
      props.loadTasks()
    }
    
  },[])
  
  
  
  useEffect(()=>{
  
   //props.tasks.map(task=>{
      //const id=task._id
      setTasks(props.tasks)
      
      /*tasks.sort(function(a,b){
        let c=new Date(a.dueDate.toUTCString());
        let d=new Date(b.dueDate.toUTCString());
        return c>d?-1:1;
      })*/
      
      
      
      
    
  
   //})
    
  },[props.tasks])
  
  /*useEffect(()=>{
    
    setTimeout(()=>{
      tasks.map(task=>{
        
      
    })
    
    },1000);
      
   
    
  })*/
  
  
  function handleDelete(){
    props.deleteAllTasks()
  }
  
  function handleChange(e){
    
    const id=e.target.id;
    
    props.changeStatus(id,e.target.value)
    
    if(e.target.value==="Completed"){
      setArchived(true)
    }
    
  }
  

  
  return(
    
    <div className="container mt-3 pb-5">
    
      <div className="row">
         <Link to="/add-task"><button className="btn btn-success m-3">Add New Task</button></Link>
      
        {/* <button onClick={handleDelete} className="m-3 btn btn-danger">Delete All Tasks</button>*/}
      </div>
      
      
      {archived?<div className="alert alert-success">Task Moved To Archives</div>:null}
      
      {tasks.sort((a,b)=>{
      new Date(a.dueDate)<new Date(b.dueDate)?-1:1}).filter(task=>task.status!=="Completed").map(task=>(
        
     
    <>
      
      <div key={task._id} style={{backgroundColor:"#dce0e6",boxShadow:"0 0 2px 3px #aaa"}} className="mt-4">
      
        <div className="row">
        <h1 className="mt-3 ml-2 col-12 display-4">{task.name}</h1>
        </div>
        
        <div className="col-12">
        <button className="mt-1 btn btn-warning">{task.label}</button>
        </div>
        
        <div className="row form-group mt-3">
          <label htmlFor="status" className="col-4 col-md-2 ml-3 mt-2"><h5>Status</h5></label><select id="status" className="form-control col-6 col-md-9" onChange={handleChange} id={task._id} value={task.status}>
            <option value="New" selected={task.status==="New"?true:false}>New</option>
            <option value="Ongoing" selected={task.status==="Ongoing"?true:false}>Ongoing</option>
            <option value="Completed" selected={task.status==="Completed"?true:false}>Completed</option>
          </select>
          
        </div>
        
        <div className="row mt-1 pb-2">
        <h5 className="ml-3 col-4 col-md-2">Due Date</h5><p className="mt-1 col-6 col-md-9">{new Date(task.dueDate).toLocaleString('default',{weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric',timeZoneName:'short'})}</p>
        </div>
      </div>
      
        <div className={new Date(task.dueDate)>Date.now()?"bg-success text-white text-center":"bg-danger text-white text-center"}>
        
          <h3 className="p-2">{new Date(task.dueDate)>Date.now()?"In Progress":"Overdue"}</h3>
        </div>
      </>
      
      ))}
      
      {tasks.filter(task=>task.status!=="Completed").length===0?<h2 className="text-center p-4 mt-4">No Active Tasks</h2>:null}
     
    </div>
    
  )
}

function mapStateToProps(state){
  return{
    tasks:state.tasks
  }
}

function mapDispatchToProps(dispatch){
  return{
    loadTasks(){
      
      dispatch(taskActions.loadTasks())
    },
    
    deleteAllTasks(){
      dispatch(taskActions.deleteAllTasks())
    },
    changeStatus(id,value){
      dispatch(taskActions.changeStatus(id,value))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(TaskPage);