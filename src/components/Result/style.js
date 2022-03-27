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
  headdiv:{
    width:"100%",
    //border:"1px solid white",
    
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
  tablediv:{
    width:'100%',
    // border:'1px solid yellow',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'10px'
  },
  maintable:{
    //border:'1px solid white',
    margin:'10px'
  },
  



  "@media(max-width:780px)": {
     innerhead:{
       fontSize:'12vw'
     },
     bottomline:{
       fontSize:'3.5vw',
       textAlign:'center'
     },
     tablediv:{
       padding:'0px'
     },
     maintable:{
       margin:'5px',
       width:'100%'
     }
  },
});

export { useStyles };
