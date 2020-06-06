import axios from 'axios';



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
    
    axios.get('/task')
    .then((res)=>{
      
      dispatch(loadTasksSuccess(res.data))
    })
  }
  
}

export const createTask=(task)=>{
  return function(dispatch){
    
    axios.post('/task',task)
    .then(res=>{
      dispatch(createTaskSuccess(res.data))
    })
    
    
  }
}

export const deleteAllTasks=()=>{
  return function(dispatch){
    
    axios.delete('/task')
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
    
    axios.put('/task',data)
    .then((res)=>{
      dispatch(loadTasks())
    })
  }
}