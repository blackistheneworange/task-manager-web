const router=require('express').Router();
const jwt=require('jsonwebtoken');

const tasks=require('../models/taskModel');
const Users=require('../models/userModel');


router.post('/',verifyUser,(req,res)=>{
  const {name,label,status,dueDate}=req.body;
  
  const id=req.user.id;
  
  tasks.create({name,label,status,dueDate})
  .then((task)=>{
    
    Users.findById(id)
    .then((user)=>{
      
      user.tasks.push(task._id);
      user.save()
      .then((user)=>{
        
      
      
      
      res.send(task)
      })
    })
    
  })
  .catch(err=>res.send(err))
  
})

router.get('/',verifyUser,(req,res)=>{
  
  const id=req.user.id;
  
  Users.findById(id)
  .populate('tasks')
  .then((user)=>{
    
    res.send(user.tasks)
  })
  
  .catch(err=>{
    res.status(403).send(err)
  })
})

router.put('/',(req,res)=>{
  
  const {id,value}=req.body
  
  
  tasks.findByIdAndUpdate(id,{status:value,completionDate:Date.now()},{new:true})
  .then((task)=>{
  
    res.send()
  })
  
})

router.delete('/',verifyUser,(req,res)=>{
  
  const id=req.user.id;
  
  Users.findById(id)
  .then((user)=>{
    user.tasks.map(task=>{
      
      
      tasks.deleteOne({_id:task})
      .then((task)=>{
        
        
      })
    })
    
    user.tasks=[];
    return user.save()
  })
  .then((user)=>{
    
    return res.status(200).send()
  })

})

function verifyUser(req,res,next){
  
  const token=req.cookies['token']
  
  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET||"123",(err,user)=>{
    if(err){
      return res.status(403).send();
    }
    req.user=user;
    next();
  })
}

module.exports=router;