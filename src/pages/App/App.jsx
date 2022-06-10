import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import LogInPage from '../LogInPage/LogInPage';
import MovieIndexPage from '../MovieIndexPage/MovieIndexPage';
import ActorIndexPage from '../ActorIndexPage/ActorIndexPage';
import NavBar from '../../components/NavBar/NavBar';
import {MOVIES}  from '../../data.js';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';


function App() {
    const [user, setUser] = useState(null);
    return (
        <main className="App" >
            { user ?
                <>
                <h1 className='welcomeMessage'>Welcome to the Movies, {user}</h1>
                <NavBar />
                    <Switch>
                        <Route path="/movies/:movieName">
                            <MovieDetailPage movies={MOVIES}/>
                        </Route>
                        <Route path="/movies">
                            <MovieIndexPage user={user} movies={MOVIES}/>
                        </Route>
                        <Route exact path="/actors">
                            <ActorIndexPage movies={MOVIES}/>
                        </Route>
                        <Redirect to="/movies" />
                    </Switch>
                </>
                :
                <LogInPage setUser={setUser}/>
            }
        </main>
    );
}

export default App;
