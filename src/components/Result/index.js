import { useStyles } from "./style";
import { Typography } from "@material-ui/core";
import "./style.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(eventName, firstPrize, secondPrize, thirdPrize) {
  return { eventName, firstPrize, secondPrize, thirdPrize };
}

const rows = [
  createData(
    'For The Motion',
    'Shubham Jha, CUSAT',
    'J Sandeep Kumar, ITM Business School, Warangal', 
    ''
  ),
  createData(
    'Quizzards',
    'Team COSMIC Shubham Jha, Saurav, CUSAT',
    'Team E, Deepshika, Tarun Gitam', 
    ''
  ),
  createData(
    "Dragon's Den",
    "Kavyashree, B. Vignesh, St. Joseph's Institue of Management",
    'Hemanth Sai Praneeth, Boddu Naveen, Andhra University', 
    ''
  ),
  createData(
    "HRiday",
    "Team Priscilla Boniface D, Meghaben Kansagara, St Joseph Institute of Management",
    "Dubey Sandeep, ITM Business School",
    "Gracious DSouza, Rohith KC, St. Joseph Instituet of Management"
  ),
  createData(
    "FINwiz",
    "Krishna Agarwal, Alluri Institute of Management Sciences",
    "",
    ""
  ),
  createData(
    "Market Yourself",
    "Team Black Mamba, Gracious Dsouza, Rohith KC, D Karthik,St Joseph Institute of Management",
    "Team ITM (J Sandeep, Dubey Sandeep), ITM Business School, Warangal",
    ""
  ),
  createData(
    "Researcher's Diary",
    "J Sandeep Kumar, ITM Business School, Warangal",
    "Ujjwala Adhikhari, Nikhil J, St Joseph Institue of Management",
    "Manipriya, Sravani, Vagdevi College of Engineering"
  ),
  createData(
    "Pictography",
    "Shubham Jha, CUSAT",
    "Sanhati Ghosh, St. Joseph Institute of Management",
    "Akella R Sita Ratna Deepika, Gitam School of Business",
  ),
  createData(
    "Beat the Street",
    "Sourav Ghosh IIIT Lucknow",
    "Nimmithi Venkateswara Rao, Andhra University",
    "Gade Yashwanth, SOM NIT Warangal"
  ),
  createData(
    "Writer's Hub",
    "Sanhati Ghosh, St. Jospeh Institue of Management",
    "Jesmal Jalal, IISER Tirupati",
    "Paladugu Sravani, KL University"
  )
];
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.centerdiv}>
      <div className={classes.head}>
        <Typography variant="h2" className={classes.innerhead}>
          EVENT RESULT
        </Typography>
        <Typography variant="h6" className={classes.bottomline}>
          Congratulations to all the Participants of CURA 2022
        </Typography>
        
      </div>
     
      <div className={classes.tablediv}>
      <TableContainer className={classes.maintable} style={{width:'90%'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow >
            <TableCell style={{color:'white',fontWeight:'bold'}}>Event Name</TableCell>
            <TableCell align="center" style={{color:'white',fontWeight:'bold'}}>1st</TableCell>
            <TableCell align="center" style={{color:'white',fontWeight:'bold'}}>2nd&nbsp;</TableCell>
            <TableCell align="center" style={{color:'white',fontWeight:'bold'}}>3rd&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.eventName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{color:'white'}}
            >
              <TableCell component="th" scope="row" style={{color:'white',fontWeight:'bold'}} >
                {row.eventName}
              </TableCell>
              <TableCell align="center" style={{color:'white'}}>{row.firstPrize}</TableCell>
              <TableCell align="center" style={{color:'white'}}>{row.secondPrize}</TableCell>
              <TableCell align="center" style={{color:'white'}}>{row.thirdPrize}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </div>
    </div>
  );
}

export default Contact;
