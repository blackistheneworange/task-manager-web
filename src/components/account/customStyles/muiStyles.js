
import {makeStyles} from '@material-ui/core/styles';

import {green} from '@material-ui/core/colors';

export const useStyles=makeStyles((theme)=>({
  
  actionButton:{
    backgroundColor:green[600],
    color:"#fff",
    '&:hover':{
      backgroundColor:green[500]
    }
  }
}))