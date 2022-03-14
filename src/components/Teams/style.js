import {makeStyles} from '@material-ui/core'
import backImage from '../../resources/background-image.jpg'
const useStyles = makeStyles({
    centersection2:{
        //marginTop:'60px',
        paddingTop: '60px',
        width:'100%',
        display:'flex',
        // border:'1px solid red',
        flexDirection:'column',
        backgroundImage: `url(${backImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
    },
    imgdivparent:{
        display:'flex',
        // border:'1px solid blue',
        width:'90%',
        height:'300px',
        padding:'20px',
        justifyContent:'center',
        alignItems:'center',
        margin:'auto'
    },

    cardparent:{
        width:'25%',
        height:'280px',
        padding:'10px',
        // border:'2px solid yellow',
        display:'flex',
        justifyContent:"center",
        alignItems:'center'
    },

    '@media(max-width:1100px)':{
        imgdivparent:{
            width:'100%'
        }
    },
    '@media(max-width:700px)':{
        imgdivparent:{
            flexDirection:'column',
            height:'auto',
            // border:'1px solid red',
            // padding:'-100px 0px -100px 0px',
        },
        cardparent:{
            width:'100%'
        }
    }

    
})

export {useStyles} 