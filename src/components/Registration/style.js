import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    fullpage:{
        width:'100%',
        height:'100vh',
        // backgroundColor:'grey',
        // border:'1px solid red'
    },
    formdiv:{
        marginTop:'100px',
        width:'100%',
        // backgroundColor:'yellow',
        height:'auto',
        // border:'1px solid blue',
    },
    formhead:{
        margin:'auto',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        // border:'1px solid red',
        width:'50%',
        marginTop:'20px'
    },
    formbox:{
        // border:'1px solid red',
        width:'50%',
        margin:'auto',
        height:'auto',
    },
    inputbox:{
        width:'100%'
    }
})

export {useStyles} 