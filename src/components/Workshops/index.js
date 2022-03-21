import { useStyles } from "./style";
import { Typography } from "@material-ui/core";
import Collapsible from 'react-collapsible'
import financeWorkshop from '../../resources/finance-workshop.jpeg';
import digitalMarketing from '../../resources/digitalMarketing.jpeg'
import "./style.css";

function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.centerdiv}>
      <div className={classes.head}>
        <Typography variant="h2" className={classes.innerhead}>
          WORKSHOPS
        </Typography>
        <Typography variant="h6" className={classes.bottomline}>
          Workshops are designed to enlighten the participants in some of the latest areas of business. 
          This edition of Cura have come up with two workshops. One is to enrich you with the financial 
          literacy for investment and the second is to share certain advancements in the area of digital marketing.
          (You will receive an email to confirm your choice of workshop after you register.)
        </Typography>
        <button className={classes.registerbutton}>
          <a href='https://register.curanitw.org/' className={classes.registerlink} target='_blank'>
            Register For Workshops
          </a>
        </button>
      </div>
      <div className={classes.sections}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            Financial Literacy on Investment
          </Typography>
          <p className={classes.sectiondetails}>
            One of the most challenging yet interesting topic 'Finance' has
            gained importance in today's volatile era. With this workshop, we
            deliver the idea of:
          </p>
          <p className={classes.sectionPoints}>
            <ul>
              <li>Share Market</li>
              <li>Derivative Market (FNO)</li>
              <li>Algorithm/HFT Training</li>
              <li>
                How banking stock behave in real market and risk management
              </li>
              <li>
               How to Minimize Losses (RISK MANAGEMENT)
              </li>
            </ul>
          </p>
          <div className={classes.collapsible}>
            <Collapsible trigger="WorkShop Details">
              <div className={classes.collapseDetails}>
              <h3 style={{textDecoration:'underline'}}>Financial Literacy on Investment Workshop Curriculum: </h3>
                <ul style={{padding:'20px'}}>
                  <li>Module 1: Share Market</li>
                  <li>Module 2: Derivative Market (FNO)</li>
                  <li>Module 3: Algorithm/HFT Training </li>
                  <li>Module 4: How banking stock behave in real market and risk management</li>
                  <li>Module 5: How to Minimize Losses (RISK MANAGEMENT)</li>
                </ul>
                <h4>All the Participants will be furnished with e-certificates.</h4>
                <h3 style={{marginTop:'20px'}}>
                  Refer to <a  target="_blank" style={{color:'white'}} href="https://innovatorsandyou.com/innovator/index.php">Innovatorsandyou.com</a> for more details.  
                 </h3>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : collaboaration@innovatorsandyou.com</p>
                <h3>Coordinators</h3>
                <p>7830057771</p>
              </div> 
              
            </Collapsible>
          </div>
        </div>

        <div className={classes.imgdiv}>
          <div className="box">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className="poster" src={financeWorkshop} alt="financeWorkshop poster" />
          </div>
        </div>
      </div>

      <div className={classes.sections2}>
        <div className={classes.imgdiv}>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={digitalMarketing} alt="digital-marketing poster" />
          </div>
        </div>

        <div className={classes.details2}>
          <Typography variant="h2" className={classes.sectionhead}>
            Digital Marketing WorkShop
          </Typography>
          <p className={classes.sectiondetails}>
            Digital Medha- A Certified Realtime Digital Marketing Training Academy and
            Advertising Agency in Hyderabad is an Initiative from a team of Experienced
            Industry Professionals.
          </p>
          <p>
           Digital Medha provides a comprehensive education environment to individuals and enterprises,
           offers training that is customized to the varied needs of audiences with diverse backgrounds
          </p>
          <div className={classes.collapsible}>
            <Collapsible trigger="WorkShop Details">
              <div className={classes.collapseDetails}>
                <h3 style={{textDecoration:'underline'}}>Digital Marketing Workshop Curriculum: </h3>
                <ul style={{padding:'20px'}}>
                  <li>Module 1: Digital Marketing Overview</li>
                  <li>Module 2: Build Stunning Website with WordPress</li>
                  <li>Module 3: Search Engine Optimization (SEO) </li>
                  <li>Module 4: Google My Business</li>
                  <li>Module 5: Facebook & Instagram Advertising</li>
                  <li>Module 6: Google Ads</li>
                  <li>Module 7: How to Earn Money using Google AdSense on Website & YouTube</li>
                  <li>Module 8: Affiliate Marketing</li>
                  <li>Module 9: Smart Graphic Designing Tools</li>
                  <li>Module 10: Freelancing through Digital Marketing</li>
                </ul>
                <h4>All the Participants will be furnished with e-certificates.</h4>
              </div> 
              
            </Collapsible>
          </div>

          
          

      </div>
      </div>
      

    </div>
  );
}

export default Contact;
