import React from 'react';
import {Typography} from '@material-ui/core'
import { useStyles } from './style'
function Contact() {
    const classes = useStyles()
  return (
      <div className={classes.centersection}>
          <Typography>This is Contact us page</Typography>
      </div>
  )
}

export default Contact;
