import {makeStyles} from '@material-ui/core';

import {blue} from '@material-ui/core/colors';

export const useStyles=makeStyles((theme)=>({
  pageTitle:{
    fontFamily:"Biryani",
    color:"#fff",
    borderRadius:"20px",
    backgroundColor:blue[600],
    padding:"20px 10px 10px 10px",
    marginBottom:"6%"
  }
}))