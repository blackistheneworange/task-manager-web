import {makeStyles} from '@material-ui/core/styles';


export const useStyles=makeStyles(theme=>({
  
  deleteButton:{
    '&:focus':{
      outline:"none"
    }
  }
}))