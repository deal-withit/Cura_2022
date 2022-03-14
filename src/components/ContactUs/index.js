import React from 'react';
import {Typography} from '@material-ui/core'
import { useStyles } from './style'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Contact() {
    const classes = useStyles()
  return (
    <div className={classes.centerdiv}>
      <Typography variant='h3'
         style={{
           textAlign:'center',
           color:'white',
           padding:'40px',
           fontWeight:'bold',
           background: "-webkit-linear-gradient(#aaa,#fff)",
           "-webkit-background-clip": "text",
           "-webkit-text-fill-color": "transparent",
         }} 
      >Contact Us</Typography>

      <div className={classes.section}>
        <div className={classes.leftsection}> 
          <div>
            <Typography variant='h6' style={{fontWeight:"bold"}}>General Queries</Typography>
            <Typography variant='h8'>Radhesh Puvvula</Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <PhoneIphoneIcon/>
              &nbsp; +91 8897703662
            </Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <MailOutlineIcon/> 
                &nbsp; psm20121@student.nitw.ac.in
            </Typography>
          </div>
        </div>

        <div className={classes.rightsection}>
          <div>
            <Typography variant='h6' style={{fontWeight:"bold"}}>Registration</Typography>
            <Typography variant='h8'>Avinash Mamidi</Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <PhoneIphoneIcon/>
              &nbsp;+91 9885150149
            </Typography>
            <Typography variant='h8' className={classes.contactdetail}>
            <MailOutlineIcon/> 
              &nbsp;amsm20101@student.nitw.ac.in
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.leftsection}> 
          <div>
            <Typography variant='h6' style={{fontWeight:"bold"}}>Events</Typography>
            <Typography variant='h8'>Shubhabrato Sarkar</Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <PhoneIphoneIcon/>
              &nbsp; +91 9123370280
            </Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <MailOutlineIcon/> 
                &nbsp; sssm20147@student.nitw.ac.in
            </Typography>
          </div>
        </div>

        <div className={classes.rightsection}>
          <div>
            <Typography variant='h6' style={{fontWeight:"bold"}}>Sponsorship</Typography>
            <Typography variant='h8'>Rakesh Roshan</Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <PhoneIphoneIcon/>
              &nbsp; +91 86864349192
            </Typography>
            <Typography variant='h8' className={classes.contactdetail}>
            <MailOutlineIcon/> 
              &nbsp; rrsm20149@student.nitw.ac.in
            </Typography>
          </div>
        </div>
      </div>

      <div className={classes.section}>
        <div className={classes.leftsection}> 
          <div>
            <Typography variant='h6' style={{fontWeight:"bold"}}>Publicity</Typography>
            <Typography variant='h8'>Sandhya Pinna</Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <PhoneIphoneIcon/>
              &nbsp; +91 8008260800
            </Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <MailOutlineIcon/> 
                &nbsp; spsm21107@student.nitw.ac.in
            </Typography>
          </div>
        </div>

        <div className={classes.rightsection}>
          <div>
            <Typography variant='h6' style={{fontWeight:"bold"}}>Creative Design</Typography>
            <Typography variant='h8'>Ashwini Kumar</Typography>
            <Typography variant='h8' className={classes.contactdetail}>
              <PhoneIphoneIcon/>
              &nbsp; +91 9934553389
            </Typography>
            <Typography variant='h8' className={classes.contactdetail}>
            <MailOutlineIcon/> 
              &nbsp; aksm21105@student.nitw.ac.in
            </Typography>
          </div>
        </div>
      </div>
      


      
      {/* <Footer/> */}
    </div>
  );
}

export default Contact;
