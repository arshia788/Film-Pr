import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core';

// context
import { FilmProvider } from '../context/FilmContextProvider';

// Components
import LeftCardFilms from './shared/LeftCardFilms';
import LeftTypeSwitch from './LeftTypeSwitch';
import film from '../data';


const allCategories= ['all', ...new Set(film.map((item)=> item.category))]


const useStyles= makeStyles((theme)=>({

    container:{
        backgroundColor:'black',
    },

}))

const LeftBar = () => {

    const films= useContext(FilmProvider)

    const [data, setData] = useState(films)
    const [category, setCategory]= useState(allCategories)



    const filtering=(category)=>{
        
        if(category === 'all'){
            setData(film)
            return;
        }

        const filterFilms= film.filter((item)=> item.category === category)
        setData(filterFilms)
    }


    
    const classes= useStyles()
    return (
        <div className={classes.container}>
            
            <LeftTypeSwitch category={category}  filtering={filtering} />

            <LeftCardFilms films={data} className={classes.what}/>

        </div>
    );

};

export default LeftBar;