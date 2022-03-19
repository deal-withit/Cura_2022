import React from 'react';
import './style.scss'
import { Button } from '@material-ui/core'
import { useStyles } from './style'
function Cura() {
  const classes = useStyles()
  return(
    <>
      <div className='lumi'>
        Powering Your Curiosity!
      </div>
      <div style={{fontFamily:'Dongle', fontSize:'36px'}}>
        25th - 26th March<br></br>
        (Online Event)
      </div>
      <button className={classes.registerbutton}>
          <a href='https://register.curanitw.org/' className={classes.registerlink} target='_blank'>
            Register
          </a>
      </button>
    </>
  )
}

export default Cura;
