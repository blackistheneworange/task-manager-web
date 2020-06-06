const express=require('express');
const cors=require('cors');
const path=require('path');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cookieParser=require('cookie-parser');

const app=express();

const port=process.env.PORT||3000;
const mongoUrl=process.env.MONGO_URI||"mongodb://localhost:27017/taskManager";


const taskRoute=require('./routes/taskRoute');
const userRoute=require('./routes/userRoute');

mongoose.connect(mongoUrl,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})
  .then(()=>{
    console.log("Database Connected")
  })
  .catch(err=>console.log(err))

app.use(express.static(path.join(__dirname,'../../build')))
//app.use(cors({credentials:true,origin:"http://localhost:3000"}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());



app.use('/auth',userRoute)
app.use('/task',taskRoute)


app.get('/*',(req,res)=>{
  res.sendFile(path.resolve(__dirname,'../../build/index.html'))
})



app.listen(port,()=>{
  console.log("Listening on "+port)
})