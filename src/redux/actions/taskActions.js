import axios from 'axios';

<<<<<<< HEAD

=======
let url="";let options={};

if(process.env.NODE_ENV==="development"){
  url="http://localhost:3000";
  options={withCredentials:true}
}
>>>>>>> task manager material 1

export const createTaskSuccess=(task)=>{
  
  return{
    type:"CREATE_TASK_SUCCESS",
    task:task
  }
}

export function loadTasksSuccess(tasks){
  
  return{
    type:"LOAD_TASKS_SUCCESS",
    tasks:tasks
  }
  
}

export function deleteAllTasksSuccess(){
  return{
    type:"DELETE_ALL_TASKS_SUCCESS"
  }
}

export function clearStateTasks(){
  return{
    type:"CLEAR_STATE_TASKS"
  }
}

//THUNKS
export const loadTasks=()=>{
  
  return function(dispatch){
    
<<<<<<< HEAD
    axios.get('/task')
=======
    axios.get(url+'/task',options)
>>>>>>> task manager material 1
    .then((res)=>{
      
      dispatch(loadTasksSuccess(res.data))
    })
  }
  
}

export const createTask=(task)=>{
  return function(dispatch){
    
<<<<<<< HEAD
    axios.post('/task',task)
=======
    axios.post(url+'/task',task,options)
>>>>>>> task manager material 1
    .then(res=>{
      dispatch(createTaskSuccess(res.data))
    })
    
    
  }
}

export const deleteAllTasks=()=>{
  return function(dispatch){
    
<<<<<<< HEAD
    axios.delete('/task')
=======
    axios.delete(url+'/task',options)
>>>>>>> task manager material 1
    .then((res)=>{
      dispatch(deleteAllTasksSuccess())
    })
  }
}

export const changeStatus=(id,value)=>{
  return function(dispatch){
    const data={
      id,
      value
    }
    
<<<<<<< HEAD
    axios.put('/task',data)
=======
    axios.put(url+'/task',data,options)
>>>>>>> task manager material 1
    .then((res)=>{
      dispatch(loadTasks())
    })
  }
}