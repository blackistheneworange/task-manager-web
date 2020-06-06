const router=require('express').Router();

const Users=require('../models/userModel');

const md5=require('md5');
const jwt=require('jsonwebtoken');

router.route('/register')
  
  .post((req,res)=>{
  
    const {name,email,password}=req.body;

    
    const hashPassword=md5(password);
    
    Users.create({name,email,password:hashPassword})
    .then((user)=>{
    
      res.status(200).send()
    })
    .catch(err=>{
      res.status(403).send()
    })
    
})

router.route('/login')
   .post((req,res)=>{
     
     const {email,password}=req.body;
     
     const hashPassword=md5(password);
    
     Users.findOne({email:email})
     .then((user)=>{
      
       if(!user){
         return res.status(403).send({err:"User Not Found"})
       }
       
       if(hashPassword!==user.password){
         console.log(hashPassword+" = "+user.password)
         return res.status(403).send({err:"Incorrect Password"})
       }
       
       const accessToken=generateAccessToken({id:user._id})
       
      
       
       const options={
         expires:new Date(Date.now()+60*24*24*365*200),
         httpOnly:true
       }
       res.cookie('token',accessToken)
    
       
       res.status(200).send()
     })
   })
   

router.post('/verify',initialVerify,(req,res)=>{
  
    res.status(200).send()
   
})

router.post('/logout',(req,res)=>{
  
  res.cookie('token','',{expires:new Date(Date.now())})
  
  res.send()
})
   
   
function generateAccessToken(user){
  return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET||"123")
}

function initialVerify(req,res,next){
  const token=req.cookies['token'];

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET||"123",(err,user)=>{
    if(err){
      
      return res.status(403).send()
    }
    else{
      next();
    }
  })
}
   
module.exports=router;