import React from 'react';

import {Link} from 'react-router-dom'

import {Card,CardContent,CardActions,Grid,Typography,CardActionArea,Paper,Chip,Fade} from '@material-ui/core';

import {useStyles} from './customStyles/muiStyles';

import {purple} from '@material-ui/core/colors'

import cx from 'classnames';

const cardData=[{
  name:"Manage Tasks",
  url:"/tasks",
  icon:"book",
  timeout:500
},{
  name:"Archived Tasks",
  url:"/archives",
  icon:"all_inbox",
  timeout:1000
},{
  name:"Account Settings",
  url:"/account",
  icon:"lock",
  timeout:1500
},{
  name:"Task Settings",
  url:"/settings",
  icon:"build_circle",
  timeout:2000
}]

export default function UserDashboard(props){
  
  const classes=useStyles()
  
  return(
    
    <Grid container spacing={3} justify="center" className={classes.cardOuter}>
  
    <Fade in={true} timeout={500}>
     <Grid item xs={11} sm={8}>
     
        <Paper style={{overflowX:"visible",borderRadius:"20px"}} elevation={8}><Typography style={{marginBottom:"6%",padding:"20px 10px 10px 10px",borderRadius:"20px"}} align="center" variant="h3" component="h1" className={classes.pageTitle}>User Dashboard</Typography>
        </Paper>
     
     </Grid>
    </Fade>
     
    
     {cardData.map((task)=>(
       
     <Fade in={true} timeout={task.timeout}>
    
      <Grid item xs={6}>
        
        <Card>
         <Link className={classes.cardLinks} to={task.url}>
         <CardActionArea>
          <CardContent className="d-flex flex-column justify-content-center align-items-center">
            <i className={cx(classes.cardHeader,"material-icons","md-64")}>{task.icon}</i>
            <Typography style={{marginTop:"10px"}} variant="h5" className={classes.cardHeader}>{task.name}</Typography>
          </CardContent>
         </CardActionArea>
         </Link>
        </Card>
      
      </Grid>
      
      </Fade>
      
    ))}
      
      
    
    </Grid>
    
  )
  
}
