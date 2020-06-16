
import {makeStyles} from '@material-ui/core/styles';

import {blue,green,red} from '@material-ui/core/colors'

export const useStyles=makeStyles((theme)=>({
  
    button:{
      backgroundColor:blue[600],
      marginTop:0,
      color:"#fff",
      '&:hover':{
        outline:"none",
        
      },
      
      '&:focus':{
        backgroundColor:blue[700],
        outline:"none"
      }
    },
    
    grid:{
      padding:theme.spacing(1)
    },
    
    dialogButtonDanger:{
      backgroundColor:red[800],
      color:"#fff"
    },
    dialogButtonSuccess:{
      backgroundColor:green[500],
      color:"#fff"
    },
    
    deleteIcon:{
      '&:focus':{
        outline:"none"
      }
    }
  
  
}))