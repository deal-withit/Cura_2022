import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core';
import WorkProgress from './resources/work-in-progess.jpg'
const Usestyles=makeStyles({
    wrapper:{
        width:'100%',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'black',
        height:'100vh',
        overflowY:'hidden',
        '@media only screen and (max-width: 420px)':{
            width:'100vw',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            /*backgroundColor:'yellow',*/
            flexDirection:'column',
            height:'100vh'
        }
    },
    image:{
        height:'auto',
        width:'100%'
    },
    textbox:{
        fontSize:'44px',
        /*backgroundColor:'yellow',*/
        flex:6,
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        fontFamily:'Work Sans',
        color:'white',
        '@media only screen and (max-width: 420px)':{
            fontSize:'28px',
            flex:6,
            display:'flex',
            alignItems:'start',
            justifyContent:'center',
            padding:'5%'
        }
    },
    imagebox:{
        flex:6,
        /*backgroundColor:'blue',*/
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
});

const CommingSoon = () => {
    const classes=Usestyles();
    return (
        <div className={classes.wrapper} >
            <Box className={classes.imagebox}>
                <img className={classes.image} src={WorkProgress} alt='Will be Live Soon...'/>
            </Box>
        </div>
    )
}

export default CommingSoon
