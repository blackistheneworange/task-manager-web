import React,{useEffect} from 'react';

import {Card,CardHeader,CardActions,CardContent,Typography,Button,Grid,Fade,IconButton} from '@material-ui/core';

import {useStyles} from './styles/muiStyles';


import DeleteTaskDialog from './sub/DeleteTaskDialog'

import cx from 'classnames';

let cardTimer=0;

export default function TaskCard(props){
  
  const styles=useStyles()
  
  useEffect(()=>{
    return ()=>{
      cardTimer=0
    } 
  },[])
  
  return(
    
    <Grid container>
    
   {props.tasks.filter(task=>task.status!=="Completed").map(task=>{
  
    
    return(
   <Fade in={true} timeout={cardTimer+=300}>
    <Grid item className={styles.grid} xs={12} md={4}>
    <Card>
      <CardContent>
       <div className="d-flex justify-content-between">
        <Typography variant="span" color="textSecondary" gutterBottom>
          
          Taskination
          
        </Typography>
        
        <IconButton className={styles.deleteIcon} onClick={props.handleDialogOpen} style={{marginTop:"-12px"}}><i className="material-icons md-24">delete</i></IconButton>
      </div>
        
        <Typography variant="h5" component="h2" gutterBottom>
          
           {task.name}
        
        </Typography>
        
        <Typography variant="body2" component="p">
         <span style={{fontSize:"inherit",fontWeight:700}}>To be completed on/before </span>
           {new Date(task.dueDate).toString()}
           
        </Typography>
      
      </CardContent>
      
      <CardActions>
      
        <Button fullWidth variant="contained" size="small" className={cx(styles.button)} onClick={()=>props.handleChange(task._id)}>Mark As Completed</Button>
      </CardActions>
    
    
    </Card>
    </Grid>
    
   </Fade>
   
    
    )})}
    
    <DeleteTaskDialog dialogOpen={props.dialogOpen} handleDialogClose={props.handleDialogClose} handleDeleteTask={props.handleDeleteTask}/>
    
  </Grid>
  )
  
  
}