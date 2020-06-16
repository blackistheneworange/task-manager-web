import {makeStyles} from '@material-ui/core';

import {blue,red,green} from '@material-ui/core/colors';

export const useStyles=makeStyles((theme)=>({
  pageTitle:{
    fontFamily:"Biryani",
    color:"#fff",
    borderRadius:"20px",
    backgroundColor:blue[600],
    padding:"20px 10px 10px 10px",
    marginBottom:"6%"
  },
  button:{
    backgroundColor:blue[400],
    color:"#fff",
    '&:focus':{
      backgroundColor:blue[700],
      textDecoration:"none",
      outline:"none"
    }
  },
  dialogButtonDanger:{
    backgroundColor:red[700],
    color:"#fff"
  },
  dialogButtonSuccess:{
    backgroundColor:green[500],
    color:"#fff"
  }
}))