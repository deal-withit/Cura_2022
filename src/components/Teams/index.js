import React from 'react';
import { useStyles } from './style'
import './style.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import arijitSaha from '../../resources/ARIJIT SAHA.jpg'
import ashwiniKumar from '../../resources/AshwiniKumar.jpeg'
import avinashMamidi from '../../resources/Avinash Mamidi.jpg'
import challaRatna from '../../resources/Challa Ratna Abhishake.png'
import deepthiRamesh from '../../resources/DEEPTHI RAMESH POGULA.jpg'
import debenduGhosh from '../../resources/DebenduGhosh.jpg'
import gadeYashwant from '../../resources/GADE YASHWANTH.jpg'
import jessicaMettu from '../../resources/Jessica Mettu.jpg'
import RakeshRoshan from '../../resources/RAKESHROSHAN.jpeg'
import radheshPuvvula from '../../resources/Radhesh Puvvula.jpg'
import sandhyaPinna from '../../resources/Sandhya Pinna.jpg'
import sayakKundu from '../../resources/Sayak Kundu.jpg'
import shubhabratoSarkar from '../../resources/SHUBHABRATO SARKAR.jpg'
import vilasAdmane from '../../resources/vilas-admane.jpeg'
import briddhiJaiswal from '../../resources/Briddhi_Jaiswal.jpg'
import kundanKumar from '../../resources/KundanKumar.jpg'
import AmritPandey from '../../resources/Amrit_Pandey.jpeg'

function Contact() {
    const classes = useStyles()
    
    return (
      <div className={classes.centersection2}>
        <h1
          className="teamHead"
        >
          'Meet The Team'
        </h1>
        <div className={classes.imgdivparent}>
          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={arijitSaha} alt="Arijit Saha" class="image" />
              </div>
              <div class="details">
                <h2>Arijit Saha</h2>
                <p>Events</p>
                <div className='social_link'>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.instagram.com/arijit_saha04/"
                  >
                    <InstagramIcon />
                  </a>
                  <a 
                    target="_blank"
                    href="mailto: assm20104@student.nitw.ac.in"
                    rel="noreferrer"
                  >
                    <MailIcon/>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img
                  src={shubhabratoSarkar}
                  alt="Subhabrato Sarkar"
                  class="image"
                />
              </div>
              <div class="details">
                <h2>Subhabrato Sarkar</h2>
                <p>Events</p>
                  <div class="social_link">
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/shubhabrato-sarkar-197b011a1/"
                      >
                        <LinkedInIcon />
                      </a>
                      <a 
                        target="_blank"
                        href="mailto: sssm20147@student.nitw.ac.in"
                        rel="noreferrer"
                      >
                        <MailIcon/>
                      </a>
                  </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={debenduGhosh} alt="Debendu Ghosh" class="image" />
              </div>
              <div class="details">
                <h2>Debendu Ghosh</h2>
                <p>Events</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/debendughosh/"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: dgsm20106@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img
                  src={challaRatna}
                  alt="Challa Ratna Abhishake"
                  class="image"
                />
              </div>
              <div class="details">
                <h2>Challa Ratna Abhishake</h2>
                <p>Publicity</p>
                <div className='social_link'>
                <a
                  href="https://www.instagram.com/invites/contact/?i=1opb7i9mseo7b&utm_content=2fay4i6"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a 
                        target="_blank"
                        href="mailto: crsm20166@student.nitw.ac.in"
                        rel="noreferrer"
                      >
                        <MailIcon/>
                      </a>
                      </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.imgdivparent}>
          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={sandhyaPinna} alt="Pinna Sandhya" class="image" />
              </div>
              <div class="details">
                <h2>Pinna Sandhya</h2>
                <p>Publicity</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/sandhya_pinna/"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: spsm21107@student.nitw.ac.in "
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={sayakKundu} alt="Sayak Kundu" class="image" />
              </div>
              <div class="details">
                <h2>Sayak Kundu</h2>
                <p>Publicity</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  className={classes.social}
                  rel="noreferrer"
                  href="https://www.instagram.com/sayakkundu78"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: sksm21119@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={radheshPuvvula} alt="Radhesh puvvula" class="image" />
              </div>
              <div class="details">
                <h2>Radhesh puvvula</h2>
                <p>Sponsorship</p>
                <div className='social_link'>
                <a
                  href="https://www.instagram.com/radhesh996/"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: psm20121@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={RakeshRoshan} alt="Rakesh Roshan" class="image" />
              </div>
              <div class="details">
                <h2>Rakesh Roshan</h2>
                <p>Sponsorship</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/rakesh7229/"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: Rrsm20149@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.imgdivparent}>
          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={gadeYashwant} alt="G Yashwanth" class="image" />
              </div>
              <div class="details">
                <h2>G Yashwanth</h2>
                <p>Sponsorship</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/yashwanth_gade/"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: gysm20144@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={ashwiniKumar} alt="Ashwini Kumar" class="image" />
              </div>
              <div class="details">
                <h2>Ashwini Kumar</h2>
                <p>Creative Design</p>
                <div className='social_link'>
                <a
                  href="https://instagram.com/_ash_winnie_"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: aksm21105@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={jessicaMettu} alt="Jessica Mettu" class="image" />
              </div>
              <div class="details">
                <h2>Jessica Mettu</h2>
                <p>Creative Design</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/jessica_a__a?utm_medium=copy_link"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: JMSM20107@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={avinashMamidi} alt="Avinash Mamidi" class="image" />
              </div>
              <div class="details">
                <h2>Avinash Mamidi</h2>
                <p>Registration</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/avinash-mamidi/"
                >
                  <LinkedInIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: amsm20101@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={classes.imgdivparent}>
          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img
                  src={deepthiRamesh}
                  alt="Deepthi Ramesh Pogula"
                  class="image"
                />
              </div>
              <div class="details">
                <h2>Deepthi Ramesh Pogula</h2>
                <p>Registration</p>
                <div className='social_link'>
                <a
                  href="https://instagram.com/deepthirameshpogula?utm_medium=copy_link"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noreferrer"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: drsm20165@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={vilasAdmane} alt="Vilas Admane" class="image" />
              </div>
              <div class="details">
                <h2>Vilas Admane</h2>
                <p>Web Design</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/vilasadmane?utm_medium=copy_link"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: vamc20144@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={briddhiJaiswal} alt="Briddhi Jaiswal" class="image" />
              </div>
              <div class="details">
                <h2>Briddhi Jaiswal</h2>
                <p>Web Design</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/briddhi_jaiswal/"
                >
                  <InstagramIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: bjmc20133@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>

          <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={kundanKumar} alt="Kundan Kumar" class="image" />
              </div>
              <div class="details">
                <h2>Kundan Kumar</h2>
                <p>Web Design</p>
                <div className='social_link'>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/kundan-sinha-201998/"
                  >
                    <LinkedInIcon />
                  </a>
                  <a 
                    target="_blank"
                    href="mailto: kkmc20115@student.nitw.ac.in"
                    rel="noreferrer"
                  >
                    <MailIcon/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.imgdivparent}>
        <div className={classes.cardparent}>
            <div class="card">
              <div class="imgBx">
                <img src={AmritPandey} alt="Amrit Pandey" class="image" />
              </div>
              <div class="details">
                <h2>Amrit Pandey</h2>
                <p>Web Design</p>
                <div className='social_link'>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/okape/"
                >
                  <LinkedInIcon />
                </a>
                <a 
                  target="_blank"
                  href="mailto: apmc20103@student.nitw.ac.in"
                  rel="noreferrer"
                >
                  <MailIcon/>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;
