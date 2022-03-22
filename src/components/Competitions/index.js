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
          As this edition of Cura is happening online using Zoom/Google meet, we have come up with 
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
        <div className={classes.topsection}>
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

            <p className={classes.sectiondetails}>
            “If your actions inspire others to dream more, 
            learn more, do more, and become more, you are a leader.” - John Quincy Adams
            </p>
            <p className={classes.sectiondetails}>
              A potential leader can inspire their team and the world at large through their words and more
              importantly through their actions. CURA presents ‘HRiday’ as a part of SOM’s annual management fest – CURA22.
              Get a virtual experience of being a high potential leader and empower subordinates by setting goals 
              and making rational decisions along with enhancing fundamental business qualities by participating in HRiday.
              Gives a deep theoretical knowledge of the HR domain and helps increase the industrial lingo database.
            </p>
            
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
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
                <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
                
                <h3 style={{marginTop:'20px'}}>Participants: In groups(Max 2 members) / single participation(Both Allowed)</h3>
                <h3 style={{marginTop:'20px'}}>Round-1 :  25th March 2022 10:00 AM</h3>
                <li>
                    It will consist of 20 basic to advanced level HR 
                    Domain questions. 30% will be selected for the
                    Round-2, Results will be declared on the Official pages
                  </li>
                <h3 style={{marginTop:'20px'}}>Round-2 :  25th March 2022 03:00 PM</h3>
                <li>
                    It will consist of a discussion on any recent topics related to HR.
                    The groups will be selected at
                    random and topics will be given. Top-6 will proceed to round 3
                  </li>
                <h3 style={{marginTop:'20px'}}>Round-3 :  26th March 2022 10:00 AM</h3>
                <li>
                    It will consist of situation based analysis and top 3 winners
                    will be announced on our official pages
                </li>

                <h3 style={{marginTop:'20px'}}>Rules</h3>
                <h4>Three rounds will be conducted.</h4>
                <ul>
                  <li>Round-1 is the elimination round with 20 questions</li>
                  <li>Round-2 is the also elimination round</li>
                  <li>Round 3- is the final round</li>
                  <li>The time allotted is 20 minutes for round 1 and 5 mins to each
                     group in round 2 and 8 mins to each group in round 3</li>
                  <li>The time slots are fixed </li>
                </ul>

                <h3 style={{marginTop:'20px'}}>
                  Result Declaration
                </h3>
                 <li>The top 30% will be selected in round-1 for round-2</li>
                 <li>Round-2 will declare the top 6% for round 3</li>   
                    <li>Round 3 will declare the 3 winners of HRiday </li>

                
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : hriday.cura22@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Debendu Ghosh - 8159818829</p>
                <p>Deepthi Ramesh Pogula - 7893443724</p>
              </div> 
              
            </Collapsible>
          </div>
      </div>

      <div className={classes.sections2}>
        <div className={classes.innersection2}>
          <div className={classes.imgdiv}>
            <div className='box'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <img className='poster' src={quizzards} alt="quizzards poster" />
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

            <p className={classes.sectiondetails}>
             “Quizzards” will consist of two rounds. The first round will challenge the participants through
             an exciting quiz, testing them on various aspects of Management concepts and business current affairs.
              The teams who ace the quiz will qualify for the second round,
             where they will get the chance to showcase their in depth knowledge on the above mentioned topics.
            </p>
            
          </div>
        </div>
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <p>
              School of Management, National institute of Technology presents “Quizzards” – an exciting series of 
               quizzes under CURA’ 22 – Powering your Curiosity,
               a momentous management event organized by the students of School of Management.
              </p>
              
              <h3 style={{marginTop:'20px'}}>Participants: In Groups (Minimum 2) </h3>
              <h3 style={{marginTop:'20px'}}>Rules</h3>
                <h4>Two rounds will be conducted.</h4>
                
                  <li> This event is open to all college students.</li>
                  <li>Team members should be from the same institute.</li>
                  <li>A team must consist of a minimum 2 participants.</li>
                  <li>A student cannot be part of more than one team.</li>
                  <li>Each team can submit only one entry for the competition. </li>
                  <li>The decision of the organizers and judges will be final and binding on the team.</li>
                
                <h3 style={{marginTop:'20px'}}>Round-1 (Quiz)</h3>
                <li>
                  This round would be an exciting online quiz that will 
                  take you down memory lane with business related questions.
                </li>
                <li> The theme of the quiz shall be "business".</li>
                <li> The questions will be in the format of MCQs and TITA.</li>
                <li> No negative markings in this round. </li>
                <li> This will be an elimination round !</li>
                <li> The fastest, most accurate and the team answering more number of 
                  star questions would progress to the next round.</li>
                <li> Both participants of the team should participate in first
                   round and average of their scores will be considered.</li>

                <h3 style={{marginTop:'20px'}}>Round-2 :Quiz (by Quiz Master - <b>Akshay Subramanian</b>)</h3>
                <li>
                The specific rules for the final rounds will be intimated to
                 the team members before the start of each round.
                </li>
                <li>This round will be conducted by 
                  Quiz Master - Akshay Subramanian on virtual platform(like Zoom, Webex etc)</li>

              
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

      <div className={classes.sections}>
        <div className={classes.topsection}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            FOR THE MOTION
          </Typography>
          <p className={classes.sectiondetails}>
            We are looking for diplomats with good writing and oratory skills,
            if you think you are the right candidate, then why wait? Get along
            with us in this event and show your power of influence.
          </p>


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
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <h2 style={{marginTop:'20px'}}>It is an Individual Event</h2>
              <ul>
                
                  <li>
                    Round-1 Written (25th March) to be submitted in D2C. A statement will be given to each registered
                    participant. He/She has to write a passage supporting the statement in not more than 300 words and
                    upload in pdf format.
                    
                  </li>
                  <li>Plagiarism will be checked for each entry with a maximum 25% allowed.</li>
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

      
      <div className={classes.sections2}>
        <div className={classes.innersection2}>
        <div className={classes.imgdiv}>
          <div className='box'>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <img className='poster' src={dragonsDen} alt="Dragon's Den poster" />
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
        </div>
        </div>

        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <h3 style={{marginTop:'20px'}}>Participants: In Groups (Min 1 and Max 3) </h3>
              <ul>
                  <li>
                    Round 1- Idea submission round- Where each team will write a brief abstract of their idea with some
                    basic estimations and details and submit in a pdf format. The idea briefs will be thoroughly checked by
                    the judges and top 10 teams will be selected for round 2 and informed through mail. 
                    Last Date for submission of abstract is 22nd March. 
                  </li>
                  
                  <li>
                    Round 2- The top 10 teams will make a 15 minute presentation along with Q&A session with the judges.
                    The presentation will contain a detailed outline about the start-up idea, initial investment requirement,
                    timeline of development and
                    other important details along with a prototype if required.
                  </li>
                </ul>
                <h3 style={{marginTop:'20px',textDecoration:'underline'}}>Note: only candidates who shortlisted for second round need to pay registration fees</h3>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : dragonsdensom.cura2022@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Ratna Abhishake - 9154018476</p>
                <p>Ajeeth - 9487354196</p>
              </div> 
            </Collapsible>
          </div>
      </div>

     
      <div className={classes.sections}>
        <div className={classes.topsection}>
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

          <p className={classes.sectiondetails}>
           We have come up with an event called “Market Yourself – A Marketing & Leadership event”,
           where you get a chance to compete with aspirants like you from various prestigious B-Schools
           across the country who wish to develop and display their multifaceted skills. Gear up to show
           your marketing skills, develop innovative strategies to make unforeseen situations into an opportunity.
           Unleash the creative and innovative leader within you by analyzing the need of the hour problems and to
           make the best marketing plan.
          </p>


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
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
             

                <h3 style={{marginTop:'20px'}}>Participants: Minimum 2 ans Maximum 3 Per Team.</h3>
                <h3 style={{marginTop:'20px'}}>Rounds</h3>
                <ul>
                  <li>Round - 1 Quiz (Platform – Dare2compete): To bring out the best marketing wits,
                   there is a quiz which consists of 20 Questions to assess on brand 
                   awareness, advertisements and general marketing strategies, marketing concepts.</li>
                  <li>Round - 2 Case study Analysis (Presentation Zoom): 
                  A real time Industry case study will be given, or A product with a set of scenarios 
                  will be given, participants should come up with appropriate solutions and detailed analysis. 
                  Analysis in both cases should include considering market analysis, feasibility, SWOT analysis, 
                  innovation to be specific and can also include other marketing and leadership concepts.
                  </li>
                  </ul>
                <h3 style={{marginTop:'20px'}}>
                  Rules and Guidelines
                </h3>
                 <li>This event is open to all college students.</li>
                 <li>Team members should be from the same institute.</li>   
                 <li> A student cannot be part of more than one team.</li>
                 <li> Each team can submit only one entry for the competition.</li>
                 <li> The decision of the organizers and judges will be final and binding on the team.</li>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : marketYourself.cura22@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Tejaswini Kandakatla – 9491163262</p>
                <p>Ajeeth Kumar – 9487354196</p>
              </div> 
            </Collapsible>
          </div>
      </div>

      
      <div className={classes.sections2}>
        <div className={classes.innersection2}>
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
        </div>
        </div>
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
                   Top  5/10 teams (depending on the participation) will be shortlisted to the 2nd round
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
                <p>Avinash -  9885150149 </p>
              </div> 
            </Collapsible>
          </div>
      </div>
       
      <div className={classes.sections}>
        <div className={classes.topsection}>
        <div className={classes.details}>
          <Typography variant="h2" className={classes.sectionhead}>
            Pictography
          </Typography>
          <p className={classes.sectiondetails}>
            A picture says many words. A picture tells many stories. What do you think?
            Do you have the super power to imagine a story out of a picture and put it in your words?
            The Pictography is the exact platform for you. Here you need to look into the pictures and 
            type your interpretation in the given space in not more than 80 words. Make it short and engaging.
          </p>

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
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <h3 style={{marginTop:'20px'}}>No. Of Rounds : 1</h3>
                <ul>
                  <li>
                     Round - 1 : It Will take place directly on D2C. 4 pictures will be given to the participants
                     with spaces below to type. The participants have to look into the pictures and type their interpretation
                     in the space given below in not more than 80 words each. The time limit for the entire round is 40 minutes. 
                  </li>
                </ul>
                <h3 style={{marginTop:'20px'}}>Rules and Guidelines</h3>
                <li>The language of the competition is English.</li>
                <li>Plagiarism check will be done before final checking and 
                  a Plagiarism of more than 20%  will lead to disqualification.</li>
                <li>Use of abusive or cuss words is strictly prohibited and will lead to direct disqualification.</li>
                <li>Judgement criteria - The participants will be judged based on their interpretation skills, use of language,
                   and overall creativity in writing.</li>
                <li>Reward - The winner will be given a cash prize and certificate.</li>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email : pictographynitwcura@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Arijit - 9774733931</p>
                <p>Shubhabrato - 9038818520</p>
              </div> 
            </Collapsible>
          </div>
      </div>

      
      <div className={classes.sections2}>
        <div className={classes.innersection2}>
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
          This event will be immensely helpful for students aspiring to develop their careers in the
          corporate world. A solid base of finance and operations will help them grasp a better
          understanding of business processes happening in an organization and how cost is calculated.
          Financial knowledge is also beneficial to help an organization assess which projects to invest in
          and which to reject.
          </p>

        </div>
        </div>
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <ul>
                  <li>
                     Round-1 : The 1st round will be an MCQ type quiz , puzzle and case study with questions 
                     covering both finance and operations management. It will be conducted on Dare2Compete and the rules
                     and regulations will be as per the Dare2Compete norms. The name of this round is FinQuiz.
                  </li>
                  <li>
                   Round-2 : This round will be an interview session with our panel of judges on a virtual platform like Google Meet or Zoom.
                   The name of the platform along with the link will be sent to the selected group of candidates in the mail id that they used to register. 
                   The questions that will be asked in the interview will also cover finance and operations management only. 
                  </li>
                  <li>Send your submissions to: finwiznitw2022@gmail.com</li>
                </ul>
                <p style={{marginTop:'10px'}}>
                 This event will be immensely helpful for students aspiring to develop their careers in the corporate world. 
                 A solid base of finance and operations will help them grasp a better understanding of business processes
                 happening in an organization and how cost is calculated. Financial
                 knowledge is also beneficial to help an organization assess which projects to invest in and which to reject.
                </p>
                <h3 style={{marginTop:'10px'}}>Contact Details</h3>
                <p>Email - finwiznitw2022@gmail.com</p>
                <h3>Coordinators</h3>
                <p>Sayak Kundu - 8918048183 </p>
                <p>Subhabrato Sarkar- 9038818520</p>
              </div> 
            </Collapsible>
          </div>
      </div>

     
      <div className={classes.sections}>
        <div className={classes.topsection}>
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
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <p>
               The event tests the participant’s trading skills. All the participants would be given the access of a virtual trading 
               platform wherein they will have a sum of virtual money as their AUM, and the participants are required 
               to use that amount for their trading activities and maximize their monetary value within a trading week,
               starting from 21st March 2020 (Monday) to 25th March 2022 (Friday) within the trading hours.
                The trading activities would only include cash segment trading restricted to the stocks listed 
                in the Indian Stock Exchanges.
              </p>
              <li>
                All the registered candidates will be having a demo session on the useability of the platform first and will be given access to the platform. 
                Registrations for the event will end on 20th March 11:59PM.
              </li>
              <h3 style={{marginTop:'20px'}}>No of Rounds : 01</h3>
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

       
      <div className={classes.sections2}>
        <div className={classes.innersection2}>
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

          <p className={classes.sectiondetails}>
          Researcher’s Diary is a team event where each team will have to choose a topic of their choice. 
          The topic has to be from the domain of business or management. Then they will have to write briefly 
          about that topic and submit it to the panel of judges. It will then be evaluated and then the shortlisted
           teams will be given an 
          opportunity to appear in an online interview where they will be asked questions based on the writing submitted.
          </p>

          
        </div>
        </div>
        <div className={classes.collapsible}>
            <Collapsible trigger="Event Details">
              <div className={classes.collapseDetails}>
              <h1 style={{fontFamily:'Dongle'}}>Stages and Timelines</h1>
              <li>The entries can be submitted from 8:00 AM, 16/03/2022  till 8:00 PM, 21/03/2022.
                 All the entries will then be evaluated by our panel of judges and a shortlist will be prepared. 
                 The shortlisted team members will be receiving an email after the evaluation is completed. 
                 The email will be sent to the email address used to register for the event and it will consist 
                 of a Google Meet link or a Zoom link for the online interview. 
                The shortlisting process is expected to be completed by 23/03/2022 after which the mails will be sent.</li>
                <h4 className={classes.eventsubhead}>Event Rules</h4>
                <li>
                 The topic chosen should strictly be from the world of business or management.
                 Preference will be given to trending topics in these fields.
                </li>
                <li> All the participants must be from the same college and one of them must be assigned the role of TEAM LEADER.</li>
                <li>Both secondary and primary data is allowed to be included in the paper.</li>
                <li>The entire writing shouldn’t cross more than 3 A4 size pages.</li>
                <li>Font- Times New Roman, Font Size- 12.</li>
                <li>For the interview round, members of the shortlisted teams should have to be in formals during the period of the interview.</li>
                <h4 className={classes.eventsubhead}>Team Formation</h4>
                  <ol>
                    <li>
                      Team can have Minimum of 2 and Maximum of 3 participants from B.Tech/B. E/ Diploma/PG/MBA.
                    </li>
                  <li>All members Must be from the same college.</li>
                  <li>
                    No participants can be part of more than one team.
                  </li>
                  
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
  );
}

export default Competitions;
