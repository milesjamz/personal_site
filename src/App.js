import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Body from './Body'
import AboutMe from './AboutMe'
import Etc from './Etc'
import CV from './Cv'
import Projects from './Projects'

import {
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {

  state={
    colorMode:''
  }

  handleOnChange = (e) => {
    console.log('heeheehee', e.target.value)
    this.setState({ colorMode: e.target.value })
  }

  render() {

  return (
    <div className="app">
    <NavBar onChange={this.handleOnChange}
            toggle={this.state.colorMode}        />
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
}
export default App;