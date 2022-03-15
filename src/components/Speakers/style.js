import { makeStyles } from "@material-ui/core";
import backImage from "../../resources/background-image.jpg";
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
    fontSize: "5vw",
    color: "white",
    // border:'2px solid red',
    margin: "100px 0px 20px 0px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
    background: "-webkit-linear-gradient(#aaa,#fff)",
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
  },
  speakers:{
    width:'100%',
    padding:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    // border:'1px solid white'
  },
  speakersdiv:{
    width:'100%',
    padding:'10px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:'20px',
    // border:'1px solid white'
  },

  speakerimgdiv:{
    width:'250px',
    height:'250px',
    // border:'1px solid white'
  },

  speakerimg:{
    width:'100%',
    height:'100%',
    objecFit:'cover'
  },

  speakerdetails:{
    width:'70%',
    display:'flex',
    flexDirection:'column',
    padding:'20px',
    height:'250px',
    color:'white',
    paddingLeft:'50px',
    // border:'1px solid white',
    justifyContent:'center'
  },

  

  "@media(max-width:780px)": {
     head:{
       fontSize:'8vw'
     },
     speakersdiv:{
       margin:'5px'
     },
     speakerimgdiv:{
       width:'150px',
       height:'150px'
     },
     speakerdetails:{
       fontSize:'18px',
       paddingLeft:'10px',
       padding:'5px',
       height:'auto'
     },
     speakername:{
       fontSize:'22px'
     },
     speakerdetail:{
       fontSize:'18px'
     }

  },
});

export { useStyles };
