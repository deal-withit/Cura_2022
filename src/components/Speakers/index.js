import { useStyles } from "./style";
import { Typography } from "@material-ui/core";
import "./style.css";

import arvindKumar from '../../resources/Speakers/Arvind_Kumar.jpeg'
import chakraborty from '../../resources/Speakers/chakraBorty.jpeg'
import harshal from '../../resources/Speakers/Harshal_Fuse.jpg'
import lakkaraju from '../../resources/Speakers/LakkaRaju.jpeg'
import rohitGulati from '../../resources/Speakers/Rohit_Gulati.jpg'
import naveenLakkur from '../../resources/Speakers/naveen_lakkur.jpeg'
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.centerdiv}>
      <div className={classes.head}>
        <Typography variant="h2" className={classes.innerhead}>
          SPEAKERS
        </Typography>
        <Typography variant="h6" className={classes.bottomline}>
        All registered participants for both events and workshops will have access to listen to the keynote speakers.
        They would not only talk about some contemporary
        issues in the areas of management and business, but also will generate a lot of inspiration
        </Typography>
        <button className={classes.registerbutton}>
          <a href='https://register.curanitw.org/' className={classes.registerlink} target='_blank'>
            Register
          </a>
        </button>
      </div>
     
      <div className={classes.speakers}>
        
        <div className={classes.speakersdiv}>
          <div className={classes.speakerimgdiv}>
            <img src={arvindKumar} alt="arvindKumar" className={classes.speakerimg}></img>
          </div>
          <div className={classes.speakerdetails}>
            <Typography variant='h4' className={classes.speakername}>Arvind Kumar</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Chief Executive Officer at Dukes India</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>
              LinkedIn Profile : <a href="https://www.linkedin.com/in/arvindkofficial/"
               target="_blank"
               style={{textDecoration:'none',color:'white'}}
               >Arvind Kumar</a> 
            </Typography>
          </div>
        </div>

        <div className={classes.speakersdiv}>
          <div className={classes.speakerimgdiv}>
            <img src={chakraborty} alt="chakraborty" className={classes.speakerimg}></img>
          </div>
          <div className={classes.speakerdetails}>
            <Typography variant='h4' className={classes.speakername}>Dr. Shubhra chakraborty</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Global Marketing Manager - Philips</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Founder & CEO - Poshan</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Founder - Mission Helping Hands</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>
              LinkedIn Profile : <a href="https://www.linkedin.com/in/dr-shubhra-chakraborty/"
               target="_blank"
               style={{textDecoration:'none',color:'white'}}
               >Dr. Shubhra chakraborty</a> 
            </Typography>
          </div>
        </div>

        <div className={classes.speakersdiv}>
          <div className={classes.speakerimgdiv}>
            <img src={harshal} alt="Harshal Fuse" className={classes.speakerimg}></img>
          </div>
          <div className={classes.speakerdetails}>
            <Typography variant='h4' className={classes.speakername}>Harshal Fuse</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Founder & CEO at InternIn</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Ex-CMO at Colco India</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>
              LinkedIn Profile : <a href="https://www.linkedin.com/in/harshal-fuse/"
               target="_blank"
               style={{textDecoration:'none',color:'white'}}
               >Harshal Fuse</a> 
            </Typography>
          </div>
        </div>

        <div className={classes.speakersdiv}>
          <div className={classes.speakerimgdiv}>
            <img src={lakkaraju} alt="Sri Charan Lakkaraju" className={classes.speakerimg}></img>
          </div>
          <div className={classes.speakerdetails}>
            <Typography variant='h4' className={classes.speakername}>Sri Charan Lakkaraju</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Forbes 30Under30 Asia 2018</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Founder - stuMagz</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>
              LinkedIn Profile : <a href="https://www.linkedin.com/in/sricharanlakkaraju/"
               target="_blank"
               style={{textDecoration:'none',color:'white'}}
               >Sri Charan Lakkaraju</a> 
            </Typography>
          </div>
        </div>

        <div className={classes.speakersdiv}>
          <div className={classes.speakerimgdiv}>
            <img src={rohitGulati} alt="Rohit Gulati" className={classes.speakerimg}></img>
          </div>
          <div className={classes.speakerdetails}>
            <Typography variant='h4' className={classes.speakername}>Rohit Gulati</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Director Marketing at Johnson & Johnson Vision</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>
              LinkedIn Profile : <a href="https://www.linkedin.com/in/rogulati/"
               target="_blank"
               style={{textDecoration:'none',color:'white'}}
               >Rohit Gulati</a> 
            </Typography>
          </div>
        </div>

        <div className={classes.speakersdiv}>
          <div className={classes.speakerimgdiv}>
            <img src={naveenLakkur} alt="Naveen Lakkur" className={classes.speakerimg}></img>
          </div>
          <div className={classes.speakerdetails}>
            <Typography variant='h4' className={classes.speakername}>Naveen Lakkur</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>Chief Innovation Coach at Institute of Inspiring Innovation</Typography>
            <Typography variant='h5' className={classes.speakerdetail}>
              LinkedIn Profile : <a href="https://www.linkedin.com/in/naveenlakkur/"
               target="_blank"
               style={{textDecoration:'none',color:'white'}}
               >Naveen Lakkur</a> 
            </Typography>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
