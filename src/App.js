import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Body from './Body'
// import CV from './Cv'
import Projects from './Projects'
import Video from './Video'
import Resume from './mmarillo2021.pdf'
import Pic from './images/IMG_0888.jpg'

import {
  Switch,
  Route,
} from "react-router-dom";


class App extends React.Component {

  state={
    colorMode:''
  }

  handleOnChange = (e) => {
    // console.log('heeheehee', e.target.value)
    this.setState({ colorMode: e.target.value })
  }

  render() {

  return (
    <div className="app">
    <NavBar onChange={this.handleOnChange}
            toggle={this.state.colorMode}
            resume={Resume}        />
            <Body pic={Pic}/>
            <Projects />

    </div>
    );
  }
}
export default App;