import React, { useState, createContext } from 'react';
import film from '../data';


export const FilmProvider= createContext()

const FilmContextProvider = ({children}) => {

    const [films,setFilms]=useState(film)

    return (
        <div>
            <FilmProvider.Provider value={films}>
                {children}
            </FilmProvider.Provider>
        </div>
    );
};

export default FilmContextProvider;