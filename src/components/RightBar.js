import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles= makeStyles((theme)=>({
    container:{
        color:'black',
        // widoth:'100%',
        backgroundColor:'crimson',
        [theme.breakpoints.down('xs')]:{
            display:'none'
        },
        // height:'400px'
    }

}))

const RightBar = () => {

    const classes= useStyles();

    return (
        <div className={classes.container}>
            rigth barasndk
        </div>
    );
};

export default RightBar;