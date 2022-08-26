import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core'


const useStyles=makeStyles((theme)=>({
    container:{
        position:'sticky',
        top:'0px',
        left:'0',
        right:'0',
        zIndex:'1',
        background:'black',
        paddingRight:'2px'
    },
    
    progressBar:{
        width:'100%',
        height:'1vh',
        background:'black',
        zIndex:'2'
    },

    MainProgressBar:{
        height:'1vh',
        zIndex:3,
        background:'crimson',
    }

}))

const ScrollINdicator = () => {

    const [progress, setProgress]=useState(0)

    const ScrollProgress=()=>{
        const scrollTop= document.documentElement.scrollTop;
        const height= document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const result= (scrollTop / height) * 100
        setProgress(result)
    }

    useEffect(()=>{
        window.addEventListener('scroll', ScrollProgress)
    },[])
    

    const classes= useStyles()
    return (
        <div className={classes.container}>
            <div className={classes.progressBar}>
                <div className={classes.MainProgressBar} style={{width:`${progress}%`}}>

                </div>

            </div>
        </div>
    );
};

export default ScrollINdicator;