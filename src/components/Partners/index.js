import { useStyles } from "./style";
import { Typography } from "@material-ui/core";
import "./style.css";

import bankingSponsor from '../../resources/Partners/bankingSponsor.png'
import couponPartner from '../../resources/Partners/couponPartner.png'
import creditCardPartner from '../../resources/Partners/creditCardPartners.png'
import educationPartner from '../../resources/Partners/educationPartner.png'
import eLearningPlatform from '../../resources/Partners/eLearningPlatform.png'
import eventPartner from '../../resources/Partners/eventPartner.png'
import mediaPartner from '../../resources/Partners/mediaPartner.png'
import newsPartner from '../../resources/Partners/newsPartner.png'
import onlineMediaPartner from '../../resources/Partners/onlineMediaPartner.png'
import publicityPartner from '../../resources/Partners/publicityPartner.png'
import nitwaa from '../../resources/Partners/nitwaa.png'
import realEstatePartner from '../../resources/Partners/realEstatePartner.png'
import workshopPartner from '../../resources/Partners/workshopPartner.png'
import talerang from '../../resources/Partners/talerang.png'
import pagalguy from '../../resources/Partners/pagalguy.png'
import innovators from '../../resources/Partners/innovators.png'
import finlatics from '../../resources/Partners/finlatics.png'
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.centerdiv}>
      <Typography variant="h2" className={classes.head}>
        PARTNERS
      </Typography>
      <div className={classes.fulldiv}>

        <div className={classes.imgdiv}>
          <a href="https://www.nitwaa.in/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <img alt="alumniPartner" src={nitwaa} className={classes.img}></img>
          </a>
          <Typography variant='h6'>Alumni Partner</Typography>
        </div>
        <div className={classes.imgdiv}>
        <a href="https://www.onlinesbi.com/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <img alt="bankingSponsor SBI" src={bankingSponsor} className={classes.img}></img>
          </a>
          <Typography variant='h6'>Banking Sponsor</Typography>
        </div>
        <div className={classes.imgdiv}>
         <a href="https://www.icicibank.com/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <img alt="creditCardPartner" src={creditCardPartner} className={classes.img}></img>
          </a>
          <Typography variant='h6'>Credit Card Partner</Typography>
        </div>
        
        
      </div>

      <div className={classes.fulldiv}>
      <div className={classes.imgdiv}>
          <a href="https://zoutons.com/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
           <img alt="coupon partner" src={couponPartner} className={classes.img}></img>
          </a>
          <Typography variant='h6'>Coupon Partner</Typography>
        </div>
        <div className={classes.imgdiv}>
          <a href="https://prepp.in/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center' 
          }}>
             <img alt="educationPartner" src={educationPartner} className={classes.img}></img>
          </a>
          <Typography variant='h6'>Education Partner</Typography>
          
        </div>
        <div className={classes.imgdiv}>
        <a href="https://www.unschool.in/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
           <img alt="eLearningPlatform" src={eLearningPlatform} className={classes.img}></img>
          </a>
          <Typography variant='h6'>eLearning Platform</Typography>
        </div>
        
      </div>

      <div className={classes.outerdiv}>
        <Typography variant='h5' className={classes.partnerName}>Event Partners</Typography>
       <div className={classes.fulldiv2}  >
        <div className={classes.imgdiv}>
          <img alt="eventPartner" src={eventPartner} className={classes.img}></img>
          {/* <Typography variant='h6'>Event Partner</Typography> */}
        </div>
        <div className={classes.imgdiv}>
          <img alt="realEstatePartner" src={talerang} className={classes.img}></img>
          {/* <Typography variant='h6'>Real Estate Partner</Typography> */}
        </div>
        <div className={classes.imgdiv}>
          <img alt="realEstatePartner" src={finlatics} className={classes.img}></img>
          {/* <Typography variant='h6'>Real Estate Partner</Typography> */}
        </div>
        {/* <div className={classes.imgdiv}>
          <img alt="mediaPartner" src={mediaPartner} className={classes.img}></img>
          <Typography variant='h6'>Media Partner</Typography>
        </div> */}
        {/* <div className={classes.imgdiv}>
          <img alt="newsPartner" src={newsPartner} className={classes.img}></img>
          <Typography variant='h6'>News Partner</Typography>
        </div> */}
        {/* <div className={classes.imgdiv}>
          <a href="https://collegedunia.com/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
           <img alt="onlineMediaPartner" src={onlineMediaPartner} className={classes.img}></img>
          </a>
          <Typography variant='h6'>Online Media Partner</Typography>
        </div> */}
       </div>
       <div className={classes.fulldiv3}>
         <div className={classes.imgdiv}>
          <img alt="mediaPartner" src={realEstatePartner} className={classes.img}></img>
          {/* <Typography variant='h6'>Media Partner</Typography> */}
         </div>
       </div>
      </div>

      <div className={classes.outerdiv}>
        <Typography variant='h5' className={classes.partnerName}>Media Partners</Typography>
       <div className={classes.fulldiv2}  >
        <div className={classes.imgdiv}>
          <img alt="mediaPartner" src={mediaPartner} className={classes.img}></img>
          {/* <Typography variant='h6'>Media Partner</Typography> */}
        </div>
        <div className={classes.imgdiv}>
          <img alt="newsPartner" src={newsPartner} className={classes.img}></img>
          {/* <Typography variant='h6'>News Partner</Typography> */}
        </div>
        <div className={classes.imgdiv}>
          <a href="https://collegedunia.com/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
           <img alt="onlineMediaPartner" src={onlineMediaPartner} className={classes.img}></img>
          </a>
          {/* <Typography variant='h6'>Online Media Partner</Typography> */}
        </div>
       </div>
       <div className={classes.fulldiv3}>
         <div className={classes.imgdiv}>
          <img alt="mediaPartner" src={publicityPartner} className={classes.img}></img>
          {/* <Typography variant='h6'>Media Partner</Typography> */}
         </div>
         <div className={classes.imgdiv}>
          <img alt="mediaPartner" src={pagalguy} className={classes.img}></img>
          {/* <Typography variant='h6'>Media Partner</Typography> */}
         </div>
       </div>
       
      </div>

      <div className={classes.outerdiv}>
        <Typography variant='h5' className={classes.partnerName}>WorkShop Partners</Typography>
       <div className={classes.fulldiv2}  >
        <div className={classes.imgdiv}>
          <a href="https://digitalmedha.com/" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
          <img alt="mediaPartner" src={workshopPartner} className={classes.img}></img>
          </a>
          {/* <Typography variant='h6'>Media Partner</Typography> */}
        </div>
        <div className={classes.imgdiv}>
          <a href="https://www.innovatorsandyou.com/innovator/index.php" target="_blank" rel="noreferrer" style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}>
           <img alt="onlineMediaPartner" src={innovators} className={classes.img}></img>
          </a>
          {/* <Typography variant='h6'>Online Media Partner</Typography> */}
        </div>
       </div>
       
      </div>



    </div>
  );
}

export default Contact;
