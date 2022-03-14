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
    fontWeight: "bold",
    padding: "50px",
    fontSize: "7vw",
    color: "white",
    // border:'2px solid red',
    margin: "100px 0px 20px 0px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    background: "-webkit-linear-gradient(#aaa,#fff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },

  sections: {
    // border: "1px solid yellow",
    margin: "20px",
    display: "flex",
    color: "white",
    marginBottom: "50px",
    paddingBottom: "20px",
    height:'auto',
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },

  
  sections2: {
    margin: "20px",
    display: "flex",
    color: "white",
    marginBottom: "50px",
    paddingBottom: "20px",
    // border: "1px solid red",
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
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
    marginTop:'80px !important' 
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
    marginTop:'80px !important' 
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
    borderTop:'1px solid white'
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
    head: {
      fontSize: "12vw",
    },
    sections: {
      flexDirection: "column",
      marginTop:'-50px'
    },
    sections2: {
      flexDirection: "column-reverse",
      marginTop:'-50px'
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
      fontSize:'3vw'
    },
    
  },
});

export {useStyles} 