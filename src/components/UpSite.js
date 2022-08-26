import React,{useContext, useState} from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import { Link } from 'react-router-dom';

// function
import {splitFilms} from '../helper/function';
import {filterLoveFilms} from '../helper/function';
import {filterActionFilms} from '../helper/function';


// context
import { FilmProvider } from '../context/FilmContextProvider';

// card pop up
import CardUp from './shared/CardUp';


const useStyles=makeStyles((theme)=>({
    container:{
        // width:'100vw',
        background:'black',
        // padding:theme.spacing(1)
        // borderBottom:'1px solid #eee',
        paddingBottom:theme.spacing(4)
    },

    boxTileFilms:{
        margin:'0px 10px',
        display:'flex',
        justifyContent:'space-between',
        boxSizing:'border-box',
        padding:'5px'
    },
    
    text:{
        color:'#fff'
    },

    link:{
        color:'#fff',
        textDecoration:'none',
        transition:'all .3s ease',
        '&:hover':{
            color:'crimson'
        }
    },

    yoyo:{
        color:'crimson',
        textDecoration:'none'
    },

    boxFilms:{
        width:'98%',
        marginTop:'20px',
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'0 auto',
        paddingBottom:'20px',
        marginBottom:theme.spacing(4),
        [theme.breakpoints.down('xs')]:{
            display:'block'
        }
    },
    ll:{
        marginTop:theme.spacing(1),
        
    },

    next:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',  
    }
,
    icon:{
        color:'#fff',
        marginLeft:theme.spacing(1),
    }
}))


const UpSite = () => {

    const films= useContext(FilmProvider)

    
    const [film, setFilm]= useState(films)

    const classes = useStyles()

    // top films
    const finalTopFilms = splitFilms(films)

    // love films
    const loveFilms= filterLoveFilms(films)

    // action films
    const acionFilms= filterActionFilms(films)

    return (
        <div className={classes.container}>
            <div className={classes.boxTileFilms}>
                <Typography className={classes.text} variant='h4'>
                    our top films    
                </Typography>    


                <div className={classes.next}>

                    <Link  to='/films/topfilms' className={classes.link}>
                        see more 
                    </Link>

                    <DoubleArrowIcon size='small' className={classes.icon} />  

                </div>

            </div>

            <div className={classes.boxFilms}>
                {finalTopFilms.map((item)=> <CardUp key={item.id} data={item}/>)}
            </div>

            <div className={classes.boxTileFilms}>
                <Typography className={classes.text} variant='h4'>
                    our love films    
                </Typography>    

                <div className={classes.next}>
                    <Link  to='/films/lovefilms' className={classes.link}>
                        see more 
                    </Link>

                    <DoubleArrowIcon size='small' className={classes.icon} />  

                </div>  


            </div>
            
            <div className={classes.boxFilms}>
                {loveFilms.map((item)=> <CardUp key={item.id} data={item}/>)}
            </div>


            <div className={classes.boxTileFilms}>
                <Typography className={classes.text} variant='h4'>
                    our action films    
                </Typography>    

                <div className={classes.next}>
                    <Link  to='/films/actionfilms' className={classes.link}>
                        see more 
                    </Link>

                    <DoubleArrowIcon size='small' className={classes.icon} />  
                </div>  

            </div>
            
            <div className={classes.boxFilms}>
                {acionFilms.map((item)=> <CardUp key={item.id} data={item}/>)}
            </div>

        </div>
    );
};

export default UpSite;