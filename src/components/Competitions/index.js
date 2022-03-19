import React from 'react';
import { useStyles } from './style';
import { Typography } from '@material-ui/core';
import hriday from '../../resources/hriday.png';
import beatTheStreet from '../../resources/beat-the-street.png';
import marketYourself from "../../resources/market-yourself.png";
import quizzards from "../../resources/quizzards.png";
import forTheMotion from '../../resources/for-the-motion.png'
import finwiz from '../../resources/finwiz.png'
import researchersDiary from '../../resources/researchers-diary.png'
import pictography from '../../resources/pictography.png'
import dragonsDen from '../../resources/dragons-den.png'
import writersHub from '../../resources/writers-hub.png';
import Collapsible from 'react-collapsible'
import './style.css'
function Competitions(){
  const classes = useStyles()
  return (
    <div className={classes.centerdiv}>
      <div className={classes.head}>
        <Typography variant="h2" className={classes.innerhead}>
          EVENTS
        </Typography>
        <Typography variant="h6" className={classes.bottomline}>
          As this edition of cura is happening online using Zoom/Google meet, we have come up with 
          some of the interesting events that can be hosted online. The events are not only designed 
          to enrich your knowledge in the areas of management but also would surely give you great experience.
         All the events will happen online and we have scheduled them in such a way that we wish most of our 
         participants participate in atleast three events. 
        </Typography>
        <button className={classes.registerbutton}>
          <a href='https://register.curanitw.org/' className={classes.registerlink} target='_blank'>
            Register For Events
          </a>
        </button>
      </div>
      <div className={classes.sections}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            HRiDAY
          </Typography>
          <p className={classes.sectiondetails}>
            This is for the one who has a knack for Human Resource subjects and
            is keen to experience a glimpse of what this subject is all about.
            This event gives you a platform to showcase your passion towards
            this domain and also an opportunity to enrich your knowledge. Well,
            don’t wait for it and grab this chance and participate in this
            challenge. Play it hard, be one of the top 3 champions and win the
            most exciting prizes.
          </p>
          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
                <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
                <ul>
                  <li>
                    Round-1 will consist of 20 basic to advanced level HR 
                    Domain questions. 30% will be selected for the
                    Round-2. Results will be declared on the Official pages
                  </li>
                  <li>
                    Round-2 will consist of a discussion on any recent topics related to HR.
                    The groups will be selected at
                    random and topics will be given. Top-6 will proceed to round 3
                  </li>
                  <li>
                    Round-3 will consist of situation based analysis and top 3 winners
                    will be announced on our official pages
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : hriday.cura22@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Debendu Ghosh - 8159818829</p>
                <p>Deepthi Ramesh Pogula - 7893443724</p>
              </div> 
              
            </Collapsible>
          </div>
        </div>

        <div className={classes.imgdiv}>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={hriday} alt="hriday poster" />
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
            <img className='poster' src={quizzards} alt="do-yo-know poster" />
          </div>
        </div>

        <div className={classes.details2}>
          <Typography variant="h2" className={classes.sectionhead}>
            QUIZZARDS
          </Typography>
          <p className={classes.sectiondetails}>
            Kaun Banega Crorepati? Well, not Crorepati but we can make you
            Hazarpati. On a serious note, if you know what is happening around
            the world, then you are at the right place. With world we mean
            Business, Sports, Entertainment, Current Affairs, History and basic
            General Knowledge. Show your mettle in this event and surely no one
            can stop you from being a Hazarpati.
          </p>
          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    Round-1 The first round will challenge
                    the participants through an exciting quiz, testing them on various
                    aspects of Management concepts and
                    business current affairs.
                  </li>
                  <li>
                    Round-2 You will get the chance to showcase their in depth knowledge
                    on the above mentioned topics.
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : quizzards.cura22@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Aakanksha - 9302429866</p>
                <p>Avinash - 9885150149</p>
                <p>Tejaswini - 9491163262</p>
              </div> 
            </Collapsible>
          </div>
      </div>
      </div>

      <div className={classes.sections}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            FOR THE MOTION
          </Typography>
          <p className={classes.sectiondetails}>
            We are looking for diplomats with good writing and oratory skills,
            if you think you are the right candidate, then why wait? Get along
            with us in this event and show your power of influence.
          </p>
          
          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    Round-1 Written (25th March) to be submitted in D2C. A statement will be given to each registered
                    participant. He/She has to write a passage supporting the statement in not more than 300 words and
                    upload in pdf format.
                  </li>
                  <li>
                    Round-2 Finals (26th March) to be held over video meet. The shortlisted participants have to come to a
                    video meet with their cameras on. They will be given the statement on spot and they have to speak for 3
                    minutes supporting the statement. Each finalist will be given 1 minute to think after they are given the
                    statement.
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : forthemotion.cura@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Arijit - 9774733931</p>
                <p>Chaitra - 9945888761</p>
              </div> 
            </Collapsible>
          </div>


        </div>

        <div className={classes.imgdiv}>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={forTheMotion} alt="for-the-motion poster" />
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
            <img className='poster' src={dragonsDen} alt="whats-your-idea poster" />
          </div>
          
        </div>
        <div className={classes.details2}>
          <Typography variant="h2" className={classes.sectionhead}>
            Dragon's Den SOM
          </Typography>
          <p className={classes.sectiondetails}>
            What an Idea Sir Ji!Well, this sounds familiar, right? It does, and
            if you want your idea to be called What an Idea Sir Ji!Your team can
            be a pioneer of a billion dollar business in the future, for a
            reality check we give you an opportunity to test your ideas.
          </p>

          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    Round 1- Idea submission round- Where each team will write a brief abstract of their idea with some
                    basic estimations and details and submit in a pdf format. The idea briefs will be thoroughly checked by
                    the judges and top 10 teams will be selected for round 2
                  </li>
                  <li>
                    Round 2- The top 10 teams will make a 15 minute presentation along with Q&A session with the judges.
                    The presentation will contain a detailed outline about the start-up idea, initial investment requirement,
                    timeline of development and
                    other important details along with a prototype if required.
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : dragonsdensom.cura2022@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Ratna Abhishake - 9154018476</p>
                <p>Ajeeth - 9487354196</p>
              </div> 
            </Collapsible>
          </div>

        </div>
      </div>

     
      <div className={classes.sections}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            Market Yourself
          </Typography>
          <p className={classes.sectiondetails}>
            We have got some problems that need your attention. If that solution
            seems to be feasible then, the next problem will be, how will you
            spend your prize money. Join in this marketing, leadership event and
            give the answers for the questions around you.
          </p>

          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    A Marketing  &amp; Leadership event”, where you get a chance to compete with aspirants like you from various  
                    prestigious B-Schools and Colleges across the country who wish to develop and display their  multifaceted skills. 
                  </li>
                  <li>
                    Gear up to show your marketing skills, develop innovative strategies to make your  
                    foreseen situation or crisis into an opportunity. Unleash the creative and innovative
                    leader within you by analysing the need of the hour problems and to make the best marketing plan.
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : marketYourself.cura22@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Tejaswini Kandakatla – 9491163262</p>
                <p>Ajeeth Kumar – 9487354196</p>
              </div> 
            </Collapsible>
          </div>

        </div>
        <div className={classes.imgdiv}>
        <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={marketYourself} alt="challenge-yourself poster" />
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
            <img className='poster' src={writersHub} alt="writers-hub poster" />
          </div>
        </div>
        <div className={classes.details2}>
          <Typography variant="h2" className={classes.sectionhead}>
            Writer's hub
          </Typography>
          <p className={classes.sectiondetails}>
            A Pen is mightier than a Sword. Draw your pens and spill your
            thoughts on a paper. We like you to use your analytical skills as
            well as your creativity to win this battle of the writers. PS: The
            Winter is Coming.
          </p>
          
          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                   Round - 1 (To be submitted in pdf format to mail/google forms; plagiarism check will be done)
                   - A few  topics will be listed to the participants after the registration is done and prior
                   to a few days before the  submission deadline. The participants will have to choose any one topic
                   and write a passage/short story/poem pertinent to the topic and upload it within the deadline. 
                   Word limit is 1500 words.
                   (Top  5/10 teams (depending on the participation) will be shortlisted to the 2nd round) 
                  </li>
                  <li>
                    Round 2 (To be submitted in pdf format to mail/google forms; plagiarism check will be done)-
                    An excerpt  will be given to the participants. They have to develop a meaningful story or an
                    article using it in their  text and upload it within the deadline.
                    Application to management thoughts would be appreciated. Word limit is 3000 words. 
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : writerhub.cura@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Rachana Rayala - 7989863374 </p>
                <p>Avinash</p>
              </div> 
            </Collapsible>
          </div>
        </div>
      </div>
       
      <div className={classes.sections}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            Pictography
          </Typography>
          <p className={classes.sectiondetails}>
            To lead a creative life, we must lose the fear of being wrong.
            Express yourself and get a chance to lose all your fears and reach
            the world beyond. The more clearly you express yourself, the higher
            are the chances to win.
          </p>

          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    Round -1 (To be submitted in pdf format to mail/google forms; plagiarism check will be done)
                    - A few  topics will be listed to the participants after the registration is done and prior
                    to a few days before the  submission deadline. The participants will have to choose any one topic
                    and write a passage/short story/poem pertinent to the topic and upload it within the deadline. 
                    Word limit is 1500 words.
                    (Top  5/10 teams (depending on the participation) will be shortlisted to the 2nd round) 
                  </li>
                  <li>
                    Round 2 (To be submitted in pdf format to mail/google forms; plagiarism check will be done)-
                    An excerpt  will be given to the participants. They have to develop a meaningful story or an
                    article using it in their  text and upload it within the deadline.
                    Application to management thoughts would be appreciated. Word limit is 3000 words. 
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : writerhub.cura@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Rachana Rayala - 7989863374 </p>
                <p>Avinash</p>
              </div> 
            </Collapsible>
          </div>

        </div>
        <div className={classes.imgdiv}>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={pictography} alt="what-you-think poster" />
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
            <img className='poster' src={finwiz} alt="beer-game poster" />
          </div>
        </div>
        <div className={classes.details2}>
          <Typography variant="h2" className={classes.sectionhead}>
            Finwiz
          </Typography>
          <p className={classes.sectiondetails}>
            Want to start a company? Then you should be aware of the
            calculations of ERP and budgeting for it. Imagine your own company
            and perform calculations for it, and the most efficient team with
            the more viable numbers shall be the star of the day.
          </p>

          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    Round-1  The teams will have to choose a hypothetical company, and create a
                    presentation of an ERP keeping in mind the requirements of its departments, like Operations, HR etc.
                    First round also can be unique case study which will be given by our mentor . The aim of the ERP should
                    be to integrate all the departments under a common platform, which will help them coordinate with
                    each other seamlessly, making information exchange faster, easier, as well as address the security and
                    confidentiality concerns i.e departments will have their confidential information safeguarded from
                    unwarranted people, be it employees fromother departments or those from the same department but
                    not having the necessary security clearance.
                  </li>
                  <li>
                    Round-2 The shortlisted teams will have to explain to the panel of judges about how their ERP
                    is cost effective. They need to demonstrate how much financial benefits they are getting by adopting it
                    over manual bookkeeping. The panel of judges will question them based on their design, if it covers
                    every process, if some data is necessary or not etc. Participating teams will be able to gain hands-on
                    experience of the planning process. They will be able to explore how different departments function in a
                    company in real life, what is the data generated, which data needs to be recorded, create a layout of the
                    sequence of processes involved and create an ERP based on all the information that will help to run the
                    business smoothly. 
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email - finwiznitw2022@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Sayak Kundu - 8918048183 </p>
                <p>Subhabrato Sarkar- 9038818520</p>
              </div> 
            </Collapsible>
          </div>

        </div>
      </div>

     
      <div className={classes.sections}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            Beat The Street
          </Typography>
          <p className={classes.sectiondetails}>
            Ishq Hai To Risk Hai! Want to be the king of the stock market? We
            have got a practice ground for you, before you go into the
            battlefield. Experience the essence of the Indian Stock Market and
            be prepared for the real world.
          </p>

          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                    Round-1  The winners will be decided based on the wealth accumulated at the end of the trading week.
                  </li>
                </ul>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email - beatthestreet.cura@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Rajdeep - 9854379615 </p>
                <p>Deepthi - 7893443724</p>
              </div> 
            </Collapsible>
          </div>

        </div>
        <div className={classes.imgdiv}>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={beatTheStreet} alt="beat-the-street poster" />
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
            <img className='poster' src={researchersDiary} alt="research-paper poster" />
          </div>
        </div>
        <div className={classes.details2}>
          <Typography variant="h2" className={classes.sectionhead}>
            Researcher's Diary
          </Typography>
          <p className={classes.sectiondetails}>
            Innovation is the new energy source of this ever growing world. You
            are now a part of this world, and we invite you to think and write
            about your innovative ideas and make this world a better place.
          </p>

          <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
                <h4 className={classes.eventsubhead}>Event Rules</h4>
                <li>
                  Your work should be original and in the specified format. All topics of ppt should be related to
                  management and its related. Interested candidates are advised to mail the complete paper in IEEE
                  format and presentation in .PPT or .PPTX format. The competition is open to all Engineering /PG/MBA
                  students. Students are requested to send their papers on paperpresentation.cura2022@gmail.com
                  The participants of shortlisted candidates will be informed by E-Mail ID or by Mobile.
                  Decision of the judges and the event heads shall be treated as final and binding on all and cannot be
                  contested. Directly copying from the Internet is strongly discouraged and will not be entertained.
                  The participants should come with their college ID Card. For any clarification or further details the
                  interested candidates can contact the Faculty or Student coordinators .Jury decision will be final
                  decision.
                </li>
               
                <h4 className={classes.eventsubhead}>Team Formation</h4>
                  <ol>
                    <li>
                   Team can have maximum of 3 participants from B.Tech/B. E/ Diploma/PG/MBA.
                  </li>
                  <li>
                    No participants can be part of more than one team.
                  </li>
                  <li>
                    It is not necessary that the participants forming a team should be from the same college. There is no
                    restriction on the number of teams from the same college.
                  </li>
                </ol>
                
                <h4 className={classes.eventsubhead}>Presentation Rules</h4>
                  <ol>
                  <li>
                   The paper submitted will have to be presented during the event.
                  </li>
                  <li>
                    Soft copies of the same are to be submitted before presentation to Judges through mail.
                  </li>
                  <li>
                    The Teams will get 8 minutes to present their paper. And 2 minutes will be for questioning by judges.
                  </li>
                  <li>
                    The participants will have to present their papers in MS-Power Point (ppt) format only.
                  </li>
                  <li>
                    Violation of any rule can result in rejection of paper.
                  </li>
                  <li>
                    The organizers reserve the right to change/update the rules of the contest at any point of time and
                    will do their best to inform to participants of the same. However, it is ultimately the responsibility of the
                    teams to keep themselves updated
                  </li>
                </ol>
                
                 <h4 className={classes.eventsubhead}>Paper Format Rules</h4>
                  <ol>
                  <li>
                   The paper should be in IEEE format.
                  </li>
                  <li>Abstract may not exceed the limit of two Pages.</li>
                  <li>The front page should have title of paper on the top and the details of the team members at the
                    bottom. (As mentioned in abstract)</li>
                  <li>It should have abstract attached.</li>
                  <li>Font style for text: Times New Roman, Font size for text: 12 points, Font size for headings: 16 points,
                      Font size for subheadings: 14 points.</li>
                  <li>Margin of 1 inches from all sides</li>
                </ol>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email - paperpresentation.cura2022@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Harish babu kasarla – 7013545924</p>
                <p>Sayak Kundu– 8918048183  </p>
              </div> 
            </Collapsible>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Competitions;
