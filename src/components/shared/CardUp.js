import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import style from './CardUp.module.css';


const CardUp = ({data}) => {


    return (
        
        <div className={style.box} >
            <Link to={`/films/${data.id}`}>
                
                <div className={style.title}>
                    <h4>{data.title}</h4>
                </div>

                <img className={style.img} src={data.image}/>

                <div>
                    <p className={style.text}>{data.info}</p>
                </div>

            </Link>
        </div>
    );
};

export default CardUp;