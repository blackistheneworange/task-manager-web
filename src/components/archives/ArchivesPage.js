import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';

import * as taskActions from '../../redux/actions/taskActions'

<<<<<<< HEAD


import {Link} from 'react-router-dom';

=======
import ArchivesTable from './sub/ArchivesTable'

import {Link} from 'react-router-dom';

const sample=[{
  _id:1,
  name:"Task 1",
  label:"work",
  dueDate:Date.now(),
  completionDate:Date.now(),
  priority:'High'
},{
  _id:2,
  name:"Task 2",
  label:"personal",
  dueDate:Date.now(),
  completionDate:Date.now(),
  priority:'Low'
}]

>>>>>>> task manager material 1
function ArchivesPage(props){
  
  const [tasks,setTasks]=useState([])
  
  
  
  useEffect(()=>{
    
    if(props.tasks.length===0){
      
      props.loadTasks()
    }
    
  },[])
  
  
  
  useEffect(()=>{
  

      setTasks(props.tasks)
    
  },[props.tasks])
  

  
  
<<<<<<< HEAD
  function handleDelete(){
    props.deleteAllTasks()
=======
  function handleDelete(e){
    
>>>>>>> task manager material 1
  }
  
 
  

  
  return(
    
<<<<<<< HEAD
    <div className="container mt-4 pb-5">
=======
    <div className="container-fluid mt-4 pb-5">
>>>>>>> task manager material 1
    
    
      <h1 className="bg-info p-3 text-white">Archived Tasks</h1>
      
<<<<<<< HEAD
      {tasks.filter(task=>task.status==="Completed").map(task=>(
        
     
    <>
      
      <div key={task._id} style={{backgroundColor:"#dce0e6",boxShadow:"0 0 2px 3px #aaa"}} className="mt-4">
      
        <div className="row">
        <h1 className="mt-3 ml-2 col-12 display-4">{task.name}</h1>
        </div>
        
        <div className="col-12">
        <button className="mt-1 btn btn-warning">{task.label}</button>
        </div>
        
        <div className="row mt-1 mt-3">
          <h5 className="ml-3 col-4 col-md-3">Status</h5><p className="mt-1 col-6 col-md-8">{task.status}</p>
          
        </div>
        
        <div className="row mt-1 pb-2">
        <h5 className="ml-3 col-4 col-md-3">Completion Date</h5><p className="mt-1 col-6 col-md-8">{new Date(task.completionDate).toLocaleString('default',{weekday:'long',year:'numeric',month:'long',day:'numeric',hour:'numeric',minute:'numeric',second:'numeric',timeZoneName:'short'})}</p>
        </div>
      </div>
      
     
      </>
      
      ))}
=======
      <ArchivesTable tasks={sample} handleDelete={handleDelete}/>
      
   
>>>>>>> task manager material 1
      
      {tasks.filter(task=>task.status==="Completed").length===0?<h2 className="text-center p-4 mt-4">No Archived Tasks</h2>:null}
      
     
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
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ArchivesPage);