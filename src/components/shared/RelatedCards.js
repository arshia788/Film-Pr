import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles= makeStyles((theme)=>({
    container:{
        border:'1px solid #eee',
        borderRadius:'13px',
        width:'18.22% ',
        height:'300px',
        marginRight:theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            width:'100%',
            marginBottom:'20px'
        }
    }
}))

const RelatedCards = ({data}) => {

    const classes= useStyles()

    return (
        <div className={classes.container}>
            <Link to={`/films/${data.id}`}>
                <img style={{width:'100%',height:'300px', overflow:'hidden', borderRadius:'13px'}} src={data.image}/>
            </Link>
        </div>
    );
};

export default RelatedCards;