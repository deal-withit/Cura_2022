import {makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
    centerdiv:{
        width:'100%',
        padding:'20px',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
    },
    section:{
        padding:'10px',
        width:'60%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // border:'1px solid red',
        marginBottom:'5px',
        color:'white'
    },
    leftsection:{
        width:'50%',
        // border:'1px solid red',
        textAlign:'center',
        padding:'10px',
        lineHeight:'1.5'
    },
    contactdetail:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    rightsection:{
        width:'50%',
        // border:'1px solid red',
        textAlign:'center',
        padding:'10px',
        lineHeight:'1.5'
    },

    '@media(max-width:992px)':{
        section:{
            width:'100%'
        }
    },

    '@media(max-width:620px)':{
        section:{
            flexDirection:'column',
            width:'100%'
        },
        leftsection:{
            width:'100%',
            padding:'0px',
            paddingBottom:'20px'
        },
        rightsection:{
            width:'100%',
            padding:'0px',
            paddingBottom:'20px'
        }
    }
})

export {useStyles} 