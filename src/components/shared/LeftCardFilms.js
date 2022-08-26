import React from 'react';
import { Button, makeStyles } from '@material-ui/core';
import {Link} from 'react-router-dom'

import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const useStyles=makeStyles((theme)=>({
    what:{
        paddingBottom:'20px '
    }
    ,

    box:{
        position:'relative',
        marginTop:'20px',
        border:'1px solid #eee',
        padding:'25px 21px',
        [theme.breakpoints.down('sm')]:{
        padding:'39.5px 10px',
        }
    }
    ,
    
    title:{
        color:'#fff',
        fontSize:'1.7rem',
        [theme.breakpoints.down('sm')]:{
            fontSize:'1.2rem'
        }
    }
    ,

    img:{
        width:'200px',
        height:'250px',
        borderRadius:'5px',
        marginRight:'30px',
        [theme.breakpoints.down('xs')]:{
            width:'180px',
            height:'250px',
        }
    }

    ,

    infoFilms:{
        position:'absolute',
        width:'62%',
        top:'30px',
        left:'20%',
        [theme.breakpoints.down('sm')]:{
            width:'47%',
            left:'50%',
        },
        
    },

    titleMark:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:theme.spacing(2.1),
        [theme.breakpoints.down('md')]:{
            marginBottom:theme.spacing(.5)
        }
    },

    mark:{
        color:'orange',
        fontSize:'1.5rem',
        [theme.breakpoints.down('sm')]:{
            fontSize:'1.2rem'
        }
    },

    info:{
        marginBottom:theme.spacing(1.3),
        [theme.breakpoints.down('md')]:{
            fontSize:'.8rem'
        }
    },

    span:{
        color:'orange',
        fontSize:'1.1rem',
        [theme.breakpoints.down('xs')]:{
            fontSize:'.9rem'
        }
    },
    
    MainInfo:{
        color:'#fff',
    },

    btn:{
        textAlign:'right',
        [theme.breakpoints.down('xs')]:{
            textAlign:'center'
        }
    },

    link:{
        padding:'6px 13px',
        color:'#fff',
        background:'crimson',
        borderRadius:'7px',
        textDecoration:'none',
        [theme.breakpoints.down('sm')]:{
            padding:'2px'
        }
    }
    

}))

const LeftCardFilms = ({films}) => {

    const classes= useStyles();


    return(
        <div className={classes.what}>

            {
                films.map((item,index)=>{
                    return(
                        <div className={classes.box} key={index}>
                            <img src={item.image} className={classes.img}/>

                            <div className={classes.infoFilms}>

                                <div className={classes.titleMark}>
                                     <p className={classes.title}>{item.title}</p>
                                     <p className={classes.mark}>{item.mark}</p>
                                </div>

                                <div className={classes.MainInfo}>
                                    <p className={classes.info}><span className={classes.span} >story</span>: {item.info}</p>
                                    <p className={classes.info}><span className={classes.span} >category</span>: {item.category}</p>
                                    <p className={classes.info}><span className={classes.span} >actors:</span> {item.actors}</p>
                                    <p className={classes.info}><span className={classes.span} >Relase Date:</span> {item.relase}</p>
                                </div>

                                <div className={classes.btn}>
                                    <Link to={`/films/${item.id}`} className={classes.link}>details</Link>
                                </div>

                            </div>
                        </div>
                    )
                })
            }

        </div>
    )


};

export default LeftCardFilms;