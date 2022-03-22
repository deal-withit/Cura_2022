import {makeStyles} from '@material-ui/core'
import backImage from '../../resources/background-image.jpg'
const useStyles = makeStyles({
  centerdiv: {
    border: "0.5px solid black",
    width: "100%",
    height: "auto",
    paddingBottom: "20px",
    backgroundImage: `url(${backImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },

  head: {
    display: "flex",
    justifyContent: "center",
    alignItems: "centere",
    flexDirection:'column',
    padding: "5px",
    
    //border:'2px solid red',
    margin: "100px 0px 20px 0px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    
  },
  innerhead:{
    //border:'1px solid white',
    fontWeight: "bold",
    fontSize: "5vw",
    color: "white",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background: "-webkit-linear-gradient(#aaa,#fff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  bottomline:{
    color:'white',
    padding:'10px',
    textAlign:'center',
    fontSize:'1.5vw'
  },
  registerbutton:{
    backgroundColor:'#22C4F0',
    outline:'none',
    border:'none',
    padding:'10px 30px 10px 30px',
    fontSize:'22px',
    borderRadius:'10px',
    width:'auto',
    margin:'auto',
    cursor:'pointer',
    marginBottom:'20px',
    '&:hover':{
        backgroundColor:'cyan'
    }
},
registerlink:{
    textDecoration:'none',
    color:'black',
},

  sections: {
    // border: "1px solid yellow",
    margin: "20px",
    display: "flex",
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    color: "white",
    marginBottom: "50px",
    paddingBottom: "20px",
    height:'auto',
    paddingLeft:'20px',
    paddingRight:'20px',
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },

  topsection:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  
  sections2: {
    margin: "20px",
    display: "flex",
    color: "white",
    marginBottom: "50px",
    paddingBottom: "20px",
    flexDirection:'column',
    paddingLeft:'20px',
    paddingRight:'20px',
    // border: "1px solid red",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  innersection2:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },

  details: {
    width: "50%",
    padding: "7px",
    textAlign: "left",
    marginLeft: "3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "center",
    // border: "1px solid blue",
    marginTop:'30px !important' 
  },

  details2: {
    width: "50%",
    padding: "7px",
    paddingRight: "20px",
    textAlign: "left",
    marginLeft: "3%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // border: "1px solid white",
    //marginTop:'80px !important' 
  },

  sectionhead: {
    fontFamily: "Dongle",
    textAlign: "center",
    fontSize: "5vw",
  },

  sectiondetails: {
    fontSize: "1.2vw",
    fontWeight: "normal",
    lineHeight: "1.5",
    textAlign: "justify",
    // border:'1px solid white'
  },

  collapsible:{
    // border:'1px solid white',
    width:'100%',
    cursor:'pointer',
    marginTop:'20px',
    fontSize:'20px',
    fontWeight:'bold',
    color:'cyan',
  },

  collapseDetails:{
    fontSize: "1vw",
    fontWeight: "normal",
    lineHeight: "1.5",
    textAlign: "justify",
    // border:'1px solid white',
    cursor:'auto',
    padding:'20px',
    color:'white',
    borderTop:'1px solid white',
    paddingLeft:'100px'
  },
  eventsubhead:{
    margin:'10px',
    marginLeft:'-20px',
  },

  imgdiv: {
    width: "50%",
    padding: "7px",
    height: "50%",
    margin: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "@media(max-width:780px)": {
    innerhead:{
      fontSize:'12vw'
    },
    bottomline:{
      fontSize:'3.5vw',
      textAlign:'justify'
    },
    sections: {
      flexDirection: "column",
      marginTop:'-50px',
      paddingLeft:'0px',
      paddingRight:'0px'
    },
    topsection:{
      flexDirection:'column'
    },
    sections2: {
      flexDirection: "column",
      marginTop:'-50px',
      paddingLeft:'0px',
      paddingRight:'0px'
    },
    innersection2:{
      flexDirection:'column-reverse'
    },
    details: {
      width: "100%",
      marginLeft: "0",
    },
    details2: {
      width: "100%",
      marginLeft: "0",
      paddingRight: '0',
      marginTop:'0px'
    },
    imgdiv: {
      width: "100%",
    },
    sectionhead: {
      fontSize: "12vw",
    },
    sectiondetails: {
      fontSize: "4vw",
      textAlign: "center",
      padding: "15px",
    },
    collapseDetails:{
      fontSize:'3vw',
      paddingLeft:'10px'
    },
    
  },
});

export {useStyles} 