

export default function taskReducer(state=[],action){
  
  switch(action.type){
    
    case "LOAD_TASKS_SUCCESS":
      
      return action.tasks;
      
    
    case "CREATE_TASK_SUCCESS":
  
      return [...state,{...action.task}];
      
    case "CLEAR_STATE_TASKS":
      
      return []
      
    case "DELETE_ALL_TASKS_SUCCESS":
      
      return [];
      
    default:
      
      return state
  }
  
}