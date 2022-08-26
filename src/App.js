import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';


import Navbar from './components/Navbar';
import ScrollINdicator from './components/ScrollINdicator';
import Landing from './components/Landing';
import FilmContextProvider from './context/FilmContextProvider';
import DetailFilm from './components/shared/DetalFilms';
import Footer from './components/Footer';
import topfilms from './components/tops/TopFilms';


const App = () => {    

    return (
        <div >
            <FilmContextProvider>

                    <Navbar />
                    <ScrollINdicator />

                        <Switch>
                            <Route path='/films/topfilms' component={topfilms}/>
                            <Route path='/films/:id' component={DetailFilm}/>
                            <Route path='/films' component={Landing}/>
                            <Redirect to='/films'/>
                        </Switch>
                    <Footer />

            </FilmContextProvider>
        </div>
    );
};

export default App;