import {makeStyles} from '@material-ui/core/styles'

import {purple} from '@material-ui/core/colors'


export const useStyles=makeStyles((theme)=>({

  navbar:{


    color:"white",
    flexGrow:1
  },

  appBar:{
    backgroundColor:purple[700]
  },

  title:{
    flexGrow:1
  },

  navLink:{
    margin:theme.spacing(1),
    color:"#fff",
    '&:hover':{
      textDecoration:"none"
    },
    '&:active':{
      color:"#fff"
    }
  },
  
  drawerNavLink:{
    margin:theme.spacing(1),
    color:'#000',
    '&:hover':{
      textDecoration:'none'
    },
    '&:active':{
      color:'#000'
    }
  },

  navLinks:{
    display:"none",
    [theme.breakpoints.up('md')]:{
      display:"block"
    }
  },

  menuButton:{
    marginRight:theme.spacing(2),
    [theme.breakpoints.up('md')]:{
      display:"none"
    },
    '&:hover':{
      outline:"none",
      border:'none'
    },

    '&:focus':{
      outline:'none'
    }

  },
  
  
  drawer:{
    width:240
  },
  
  drawerPaper:{
    width:240
  }


}))

