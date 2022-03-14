import React from "react";
import {useStyles} from './style'
import SomNitw from '../../resources/som-nitw.jpg'
import Logo from '../../resources/Logo.png'
const About = () => {
  const classes = useStyles()
  return (
    <div className={classes.fullpage}>

      <div className={classes.aboutcura}>
        <div className={classes.details}>
          <h2 style={{textAlign:'center',paddingBottom:'30px'}}>About Cura</h2>
          <p style={{fontFamily:'Dongle'}}>
            Cura is a momentous management event organised by the students of
            School of Management every year. Cura signifying "Thoughtfulness" is
            a platform that started in 2009 to unleash the potential of the
            management aspirants all over India.
          
            The aim of the event is to elucidate the major business activities
            through different events thus to elicit the diverse responses from
            the rapt and admiring students of management. Undoubtedly this event
            is a beacon of light for all those who can balance and blend their
            skills with palatable and innovative ideas accompanied with verve.
          </p>
        </div>
        <div className={classes.imgdiv}>
          <img className={classes.cliparts}src={Logo} alt ="AboutCura-ClipArt"/>
        </div>
      </div>


      <div className={classes.aboutcura}>
        <div className={classes.imgdiv2}>
          <img className={classes.somimg} src={SomNitw} alt="aboutSom-Pic"/>
        </div>
        <div className={classes.details}>
          <h2 style={{textAlign:'center',paddingBottom:'30px'}}>About SOM NITW</h2>
          <p style={{fontFamily:'Dongle'}}>
            In the contemporary world of rapidly changing global business, which
            are technology intensive and consumer oriented, the acumen needed
            for managers is being revolutionised. Recognizing this, the
            institute has designed a comprehensive MBA programme exclusively for
            engineers.
            Thus came to light the “School Of Management (SOM)” at NIT Warangal.
            National Institute of Technology Warangal (NITW), in 2000,
            established the Centre for Management Studies. Later, renamed as
            School of Management (SOM). The School of Management provides a
            well-balanced combination of academic and practical business
            oriented content. The updated curriculum with its wide range of
            video materials, databases like prowess, case studies, research
            projects and other tools aim at enhancing the understanding of the
            business reality and also imbibing problem-solving skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
