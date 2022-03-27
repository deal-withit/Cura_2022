import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
import { useStyles } from './style'
function Cura() {
  const classes = useStyles()
  return(
    <>
      <div className='lumi'>
        Powering Your Curiosity!
      </div>
      <div style={{fontFamily:'Dongle', fontSize:'36px'}}>
        25th - 26th March(<span  style={{color:'orange',fontFamily:'Dongle', fontSize:'36px'}}>Registration Closed</span>)<br></br>
        (Online Event)
      </div>
      {/* <button  type="button" disabled className={classes.registerbutton}>
          <a href='https://register.curanitw.org/' className={classes.registerlink} target='_blank'>
            Register
          </a>
      </button> */}
      <Link to="/result">
        <button className={classes.registerbutton}>
          Event Results
        </button>
      </Link>
      
    </>
  )
}

export default Cura;
