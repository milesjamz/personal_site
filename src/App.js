import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Body from './Body'
import AboutMe from './AboutMe'

function App() {
  return (
    <div className="app">
    <NavBar />
    <Body />
    <AboutMe />
    </div>
  );
}

export default App;