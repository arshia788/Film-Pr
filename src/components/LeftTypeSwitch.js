import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';



const useStyles=makeStyles ((theme)=>({

    LeftSwitch:{
        display:'flex',
        flexDirection:'flex',
        alignItems:'center',
        justifyContent:'center',
        margin:'auto',
        paddingBottom:theme.spacing(3.5),
        paddingTop:theme.spacing(3),
    },

    p:{
        color:'#fff',
        marginLeft:theme.spacing(2),
        fontSize:'1.5rem',
        cursor:'pointer',
        '&:hover':{
            color:'crimson'
        },
    }


}))

const LeftTypeSwitch = ({category, filtering,color}) => {
    
    const classes= useStyles()


    return (

        <div className={classes.LeftSwitch}> 

            {
               category.map((item, index)=>{
                return(
                    <p  key={index} className={classes.p}  onClick={()=> filtering(item)}> {item}</p>
                )
               })

            }

        </div>
    );

};

export default LeftTypeSwitch;