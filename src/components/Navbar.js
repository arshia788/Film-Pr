import React from 'react';
import { Link } from 'react-router-dom';
import {makeStyles, Typography} from '@material-ui/core'

const useStyles=makeStyles ((theme)=>({
    container:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding:'15px',
        backgroundColor: 'black',
    },

    list:{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    link:{
        textDecoration:'none',
        color:'crimson'
    },


    li:{
        cursor:'pointer',
        color:'#fff',
        fontSize:'1.7rem',
        marginRight:theme.spacing(3),
        '&:hover':{
            color:'crimson'
        }
    },
    linkLi:{
        color:'#fff',
        textDecoration:'none',
        fontSize:'1.5rem',
        transition:'all .3s ease',
        "&:hover":{
            color:'crimson'
        }
    },

}))

const Navbar = () => {  

    const classes= useStyles()

    return (
        <div className={classes.container}>

            <Typography variant='h1' style={{fontSize:'3rem'}} >
                <Link className={classes.link} to='/films'>films</Link>
            </Typography>

            <ul className={classes.list}>
                <li><Link className={classes.linkLi} to='/films/all'>all</Link>  </li>
            </ul>

        </div>
    );
};

export default Navbar;