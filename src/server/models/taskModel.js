const mongoose=require('mongoose');

const Schema=mongoose.Schema;


const taskSchema=new Schema({
  
  
  name:{
    type:String,
    required:true
  },
  label:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true
  },
  dueDate:{
    type:Date,
    required:true
  },
  completionDate:{
    type:Date
  }
  
},{
  timestamps:true
})

const taskModel=mongoose.model('tasks',taskSchema);

module.exports=taskModel;