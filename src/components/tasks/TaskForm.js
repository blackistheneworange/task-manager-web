import React from 'react';


function TaskForm(props){
  
  return(
  
    <form className="mt-3 pb-5" onSubmit={props.onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Name</label>
         <input type="text" id="name" placeholder="Enter a name for the task..." name="name" onChange={props.onChange} value={props.values.name} className="form-control" required/>
       </div>
       
       <div className="form-group">
          <label htmlFor="dueDate">Due Date</label>
          <input type="datetime-local" id="dueDate" value={props.values.dueDate} onChange={props.onChange} name="dueDate" className="form-control" required/>
          
       </div>
       
       <div className="form-group">
       
         <label htmlFor="label">Label</label>
         <select id="label" name="label" className="form-control" value={props.values.label} onChange={props.onChange} required>
            <option value="" disabled hidden>Select a label/category...</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="Work">Work</option>
            <option value="Others">Others</option>
         </select>
         
       </div>
       
       <button type="submit" className="btn btn-primary">Add Task</button>
    
    </form>
    
  )
}

export default TaskForm;