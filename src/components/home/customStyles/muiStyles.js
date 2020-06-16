import {makeStyles} from '@material-ui/core/styles';

import {purple,blue} from '@material-ui/core/colors';

import WebFont from 'webfontloader';

WebFont.load({
  google:{
    families:['Biryani:700','Coda','Faster One','Raleway:700']
  }
})


export const useStyles=makeStyles((theme)=>({
  
  overlay:{
   
    padding:"45% 50px",
    minHeight:"78vh",
    backgroundColor:purple[600],
    color:"#fff"
  },
  introText:{
    fontFamily:'Coda,Roboto,sans-serif',
    paddingBottom:10,
    fontWeight:700,
  },
  sideText:{
    
    backgroundColor:purple[700],
    color:"#fff",
    '&:hover':{
      outline:"none",
      textDecoration:"none",
      backgroundColor:purple[700]
    },
    '&:focus':{
      outline:"none"
    },
    
  },
  subText:{
    fontFamily:'Coda,Roboto,sans-serif',
    
    paddingTop:30
  },
  subText2:{
    fontFamily:'Faster One',
    fontWeight:400,
    fontSize:20,
    
  },
  
  cardHeader:{
    textAlign:"center",
    fontWeight:400
  },
  cardOuter:{
    
    paddingTop:"20%",
    paddingBottom:"65%",
  
    
  },
  cardLinks:{
    '&:active':{
      textDecoration:"none",
      
    }
  },
  pageTitle:{
   fontFamily:'Biryani',
    color:"white",
    backgroundColor:blue[600]
  }
}))