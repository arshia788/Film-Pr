import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';

import { FilmProvider } from '../../context/FilmContextProvider';


const TopFilms = () => {

    const films = useContext(FilmProvider)
    
    return (
        <div>
            ads
        </div>
    );
};

export default TopFilms;