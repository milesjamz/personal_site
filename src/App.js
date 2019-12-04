import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Body from './Body'
import AboutMe from './AboutMe'
import Graph from './Graph'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

    // <Body />
    // <AboutMe />
    // <Graph/>

function App() {
  return (
    <div className="app">
    <NavBar />
        <Switch>
          <Route path="/body">
            <Body />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Graph />
          </Route>
          <Route path="/cv">
            <Graph />
          </Route>
          <Route path="/etc">
            <Graph />
          </Route>

        </Switch>
    </div>
  );
}

export default App;