import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    fullpage:{
        width:'100%',
        color:'white'
    },

    aboutcura:{
        width:'100%',
        padding:'50px 20px 20px 20px',
        display:'flex',
        // border:'1px solid red'
    },
    details:{
        width:'60%',
        // border:'1px solid blue',
        padding:'60px',
        textAlign:'left',
        lineHeight:'1.3',
        fontSize:'2.2vw',
        fontFamily:'Dongle',
        
    },
    imgdiv:{
        width:'40%',
        // border:'1px solid red',
        padding:'20px',
        display:'flex',
        // alignItems:'center',
        justifyContent:'center',
        marginTop:'40px'
    },
    imgdiv2:{
        width:'40%',
        // border:'1px solid red',
        padding:'80px 0px 20px 20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        // marginTop:'40px'
    },
    cliparts:{
        width:'400px',
        height:'400px',
    },
    somimg:{
        width:'100%',
        height:'400px'
    },


    '@media(max-width:900px)': {
        aboutcura:{
            flexDirection:'column'
        },
        details:{
            width:'100%',
            fontSize:'6vw',
            textAlign:'center',
            padding:'25px'
        },
        imgdiv:{
            width:'100%',
            // border:'1px solid red',
            marginTop:'0px',
            padding:'25px'
        },
        imgdiv2:{
            width:'100%',
            // border:'1px solid red',
            marginTop:'0px',
            padding:'25px'
        },
    },

    '@media(max-width:700px)': {
        aboutcura:{
            flexDirection:'column',
            padding:'10px'
        },
        details:{
            width:'100%',
            fontSize:'6vw',
            textAlign:'center',
            padding:'10px'
        },
        imgdiv:{
            width:'100%',
            // border:'1px solid red',
            marginTop:'0px',
            padding:'10px'
        },
        imgdiv2:{
            width:'100%',
            // border:'1px solid red',
            marginTop:'0px',
            padding:'10px'
        },
        cliparts:{
            width:'200px',
            height:'200px'
        },
        somimg:{
            height:'200px'
        }
    }
})

export {useStyles}