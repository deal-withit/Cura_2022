import React from 'react';
import {Home,About} from './'
import Contactus from './ContactUs'
import { makeStyles } from '@material-ui/core'
import backImage from '../resources/background-image.jpg'
import Footer from './Footer/Footer'
const useStyles = makeStyles({
  centerdiv:{
    backgroundImage: `url(${backImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  }
})
function MainPage() {
  const classes = useStyles()
  return(
      <div className={classes.centerdiv}>
          <Home/>
          <About/>
          <Contactus/>
      </div>
  )
}

export default MainPage;
