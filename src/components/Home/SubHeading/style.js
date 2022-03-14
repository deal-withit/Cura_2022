import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    registerbutton:{
        backgroundColor:'#22C4F0',
        outline:'none',
        border:'none',
        padding:'10px',
        fontSize:'22px',
        borderRadius:'10px',
        width:'200px',
        margin:'10px',
        cursor:'pointer',
        '&:hover':{
            backgroundColor:'cyan'
        }
    },
    registerlink:{
        textDecoration:'none',
        color:'black',
    }
})

export {useStyles} 