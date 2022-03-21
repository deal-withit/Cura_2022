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
  fulldiv:{
    margin:'30px',
    padding:'20px',
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems:'center'
    //border:'1px solid cyan'
  },
  imgdiv:{
    width:'auto',
    height:'auto',
    //border:'1px solid white',
    display:'flex',
    flexDirection:'column',
    justifyAlign:'center',
    alignItems:'center',
    color:'white',
    boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset'

  },
  img:{
    width:'80%',
    height:'auto',
    objectFit:'cover',
    margin:'10px',
    //border:'1px solid white',
    
  },

  "@media(max-width:1150px)": {
     fulldiv:{
       flexDirection:'column',
       margin:'10px',
       padding:'10px',
       justifyContent:'center',
       alignItems:'center'
     },
     head:{
      fontSize:'8vw'
    },
     imgdiv:{
       margin:'20px',
       padding:'10px'
     }
  },
});

export { useStyles };
