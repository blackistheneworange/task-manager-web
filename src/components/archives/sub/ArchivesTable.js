import React from 'react';

import {useStyles} from '../styles/muiStyles'

import {TableBody,TableCell,Table,TableRow,TableHead,TableContainer,Paper,IconButton} from '@material-ui/core'

export default function ArchivesTable(props){
  
  const classes=useStyles()
  
  return(
    
    <TableContainer component={Paper}>
       
       <Table style={{minWidth:"800px"}}>
       
        <TableHead>
          <TableRow>
            <TableCell align="center">&nbsp;
            </TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Label</TableCell>
            <TableCell align="center">Completed On</TableCell>
            <TableCell align="center">Overdue Time</TableCell>
            <TableCell align="center">Priority</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.tasks.map((task) => (
            <TableRow key={task.name}>
              <TableCell align="center"><IconButton className={classes.deleteButton}>
                   <i id={task._id} onClick={props.handleDelete} className="material-icons md-24">delete</i>
                </IconButton>
              </TableCell>
              <TableCell component="th" scope="row">
                {task.name}
              </TableCell>
              <TableCell align="center">{task.label}</TableCell>
              <TableCell align="center">{new Date(task.completionDate).toString()}</TableCell>
              <TableCell align="center">{new Date(task.completionDate)-new Date(task.dueDate)}</TableCell>
              <TableCell align="center">{task.priority}</TableCell>
            </TableRow>
          ))}
        </TableBody>
       
       
       </Table>
    
    </TableContainer>
  )
}