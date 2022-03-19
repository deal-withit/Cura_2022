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
     innerhead:{
       fontSize:'12vw'
     },
     bottomline:{
       fontSize:'3.5vw',
       textAlign:'justify'
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
