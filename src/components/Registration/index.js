import React from 'react'
import { useStyles } from './style'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@material-ui/core';
import {useState} from 'react'
import { Button } from '@material-ui/core'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function Registration() {
    const classes = useStyles()
    const [fullname, setFullname] = useState("")
    const [university, setUniversity] = useState("")
    const [course, setCourse] = useState("")
    const [idfile, setIdfile] = useState(null)
    const [payment,setPayment] = useState(null)
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(0)
    const [value,setValue] = useState("")//Event or Workshop
    const [transaction, setTransaction] = useState("")

    const navigate = useNavigate()
    const handleIdfile = (event) =>{
      setIdfile(event.target.files[0])
    }
    const handlePayment = (event) =>{
      setPayment(event.target.files[0])
    }
    const handleProgram =(event)=>{
      setValue(event.target.value)
    }
    const handleSubmit =(e) => {
      e.preventDefault()
      let data = new FormData()

      data.append("name", fullname)
      data.append("univ",university)
      data.append("current_deg",course)
      data.append("email",email)
      data.append("phone",phone)
      data.append("transaction_id",transaction)
      data.append("registration_type",value)
      data.append("id_file",idfile)
      data.append("payment_proof_file",payment)
      
      axios
        .post(`/api/partner`,data)
      .then((res)=>{
          console.log("Submitted Successfully")
          navigate('/')
      })
      .catch((err)=>{
          if(err){
            console.log("Error")
           }
      })
  }
  //console.log(fullname,university, course, idfile, payment, email, phone, value);
  
  return (
    <div className={classes.fullpage}>
      <div className={classes.formdiv}>
        <Typography className={classes.formhead} variant='h3'>
          Register Here...
        </Typography>
          <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
            className={classes.formbox}
          >
          <TextField  
            required
            label="Full Name"
            variant="standard"
            className={classes.inputbox}
            style={{width:'100%'}}
            onChange={event=> setFullname(event.target.value)}
          />
          <TextField
            required  
            label="University/Affiliation"
            variant="standard"
            className={classes.inputbox}
            style={{width:'100%'}}
            onChange={event=> setUniversity(event.target.value)}
          />
          <TextField  
            required
            label="Currently Pursuing"
            variant="standard"
            className={classes.inputbox}
            style={{width:'100%'}}
            onChange={event=> setCourse(event.target.value)}
          />
          
          <TextField  
            required
            label="Email (All communication will be made using this mail ) "
            variant="standard"
            className={classes.inputbox}
            style={{width:'100%'}}
            onChange={event=> setEmail(event.target.value)}
          />
          
          <TextField  
            required
            label="Phone"
            type= "number"
            variant="standard"
            className={classes.inputbox}
            style={{width:'100%'}}
            onChange={event=> setPhone(event.target.value)}
          />
          <TextField  
            required
            label="Transaction Id"
            variant="standard"
            className={classes.inputbox}
            style={{width:'100%'}}
            onChange={event=> setTransaction(event.target.value)}
          />

          <Button
            variant="contained"
            component="label"
            style={{width:"45%"}}
          >
            Upload College ID Image
            <input
              required
              type="file"
              hidden
              onChange={handleIdfile}
            />
          </Button>

          <Button
            variant="contained"
            component="label"
            style={{width:"45%"}}
          >
            Upload Payment Proof
            <input
              required
              type="file"
              hidden
              onChange={handlePayment}
            />
          </Button>

          <FormLabel id="demo-row-radio-buttons-group-label" required>Select any one </FormLabel>
            <RadioGroup
              row
              style={{display:'flex',justifyContent:'space-evenly',alignItems:'center'}}
              value={value}
              onChange={handleProgram}
            >
              <FormControlLabel
                  value="event"
                  control={<Radio />}
                  label="Event"
              />
              <FormControlLabel
                value="workshop"
                control={<Radio />}
                label="WorkShop"
              />
            </RadioGroup>
            <Button
              onClick={handleSubmit}
              style={{backgroundColor:"cyan"}}
            >
              Register Now
            </Button>
        </Box>
        
        </div>
    </div>
  )
}

export default Registration