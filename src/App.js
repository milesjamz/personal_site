import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Body from './Body'
import AboutMe from './AboutMe'
import Etc from './Etc'
import CV from './Cv'
import Projects from './Projects'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="app">
    <NavBar />
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/cv">
            <CV />
          </Route>
          <Route path="/etc">
            <Etc />
          </Route>
        </Switch>
    </div>
  );
}

export default App;