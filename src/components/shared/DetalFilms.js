import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

// components
import RelatedCards from './RelatedCards';

// context
import { FilmProvider } from '../../context/FilmContextProvider';

// function
import { relatedFilms } from '../../helper/function';



const useStyles= makeStyles((theme)=>({
    
    container:{
        background:'black',
        minHeight:'140vh',
        paddingTop:theme.spacing(1),
        [theme.breakpoints.down('xs')]:{
            height:'430vh',
        },

        [theme.breakpoints.down('md')]:{
            minHeight:'240vh',
        }
    }
    ,

    box:{
        border:'1px solid #eee',
        padding:'30px',
        position:'relative',
        borderRadius:'5px',
        display:'flex',
        // alignItems:'center',
        width:'90%',
        margin:'10px auto',
        marginBottom:theme.spacing(3.3),
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
            padding:'10px'
        }
    }
    ,

    img:{
        width:'300px',
        height:'450px',
        borderRadius:'10px',
        transition:'all .3 ease',
        marginRight:'30px',
        [theme.breakpoints.down('md')]:{
            width:'200px'
        },
        
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            height:'800px',
            borderBottom:'1px solid #eee',
            marginBottom:theme.spacing(5),
            margin:'auto'
        }
    },

    title:{
        color:'#fff',
        fontSize:'2rem',
        [theme.breakpoints.down('sm')]:{
            fontSize:'2.2rem !important'
        },

        [theme.breakpoints.down('md')]:{
            fontSize:'1.7rem'
        },

    }
    ,
    
    // in div info hast ke hame chi daroon in hast
    infoFilms:{
        width:'62%',
        [theme.breakpoints.down('md')]:{
            width:'65%',
            left:'31%',
        },
        
        [theme.breakpoints.down('sm')]:{
            width:'100%',
        },

        
    },

    titleMark:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:'40px !important',
        [theme.breakpoints.down('md')]:{
            marginBottom:theme.spacing(.5)
        }
    },

    mark:{
        color:'orange',
        fontSize:'2rem',
        [theme.breakpoints.down('sm')]:{
            fontSize:'1.8rem !important'
        },
        [theme.breakpoints.down('md')]:{
            fontSize:'1.6rem'
        },
    },

    info:{
        marginBottom:theme.spacing(3),
        fontSize:'1.4rem !important',
        [theme.breakpoints.down('md')]:{
            fontSize:'.8rem'
        }
    },
    
    MainInfo:{
        color:'#fff',
        marginBottom:theme.spacing(1)
    },

    box2:{
        border:'1px solid #eee',
        padding:'10px',
        width:'93%',
        // minHeight:'140vh',
        margin:'20px auto !important',
        borderRadius:'5px',
        [theme.breakpoints.down('sm')]:{
            display: 'flex',
            flexDirection: 'column',
            alignItems:'center',
            width:'90%',
            margin:'auto',
        }
    },

    related:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingBottom:"10px",
        [theme.breakpoints.down('xs')]:{
            display:'block',
            // paddingBottom:"100px"
        }
    }



}))

const DetalFilm = (props) => {

    const films= useContext(FilmProvider)
    const id= props.match.params.id
    const indexFilm= films[id -1]
    const {image, mark, info, title, category, relase, actors} = indexFilm

    const related = relatedFilms(films,category)
    console.log(related)

    const classes= useStyles()
    
    return (
        <div className={classes.container}>
            
            <div className={classes.box}>
                <img className={classes.img} src={image} alt={title}/>
                
                <div className={classes.infoFilms}>

                    <div className={classes.titleMark}>
                        <p className={classes.title}>{title} </p>
                        <p className={classes.mark}>{mark} IMDB</p>
                    </div> 

                    <div className={classes.MainInfo}>
                        <p className={classes.info}><span style={{color:'orange'}}>story</span>: {info}</p>
                        <p className={classes.info}><span style={{color:'orange'}}>category:</span> {category}</p>
                        <p className={classes.info}><span style={{color:'orange'}}>actors: </span>{actors} </p>
                        <p className={classes.info}><span style={{color:'orange'}}>Relase Date:</span> {relase}</p>
                    </div>
                </div>

            </div>

            <div className={classes.box2}>
                <p style={{fontSize:'2.1rem',color:'#fff', borderBottom:'1px solid orange', width:'fit-content', marginBottom:'33px',}}>relaited films</p>

                <div className={classes.related} >
                    {related.map((item)=> <RelatedCards key={item.id} data={item}/>)}
                </div> 

            </div>

        </div>
    );
};

export default DetalFilm;