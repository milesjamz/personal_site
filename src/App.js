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
        <Switch>
          <Route exact path="/">
            <Body pic={Pic}/>
          {/* </Route> */}
          {/* <Route path="/about"> */}
            {/* <AboutMe /> */}
          {/* </Route> */}
          {/* <Route path="/projects"> */}
            <Projects />
          {/* </Route> */}
          </Route>
          {/* <Route exact path="/cv">
            <CV />
          </Route> */}
          {/* <Route path="/etc"> */}
            {/* <Etc /> */}
            {/* </Route> */}
          <Route path="/mythos">
            <Video film={'mythostest.mov'} />
          </Route>
          <Route path="/hypochondriapp">
            <Video film={'hypochondemo.mov'} />
          </Route>
          <Route path="/bibliotecha">
            <Video film={'bibliotechatest.mov'} />
          </Route>
        </Switch>
    </div>
    );
  }
}
export default App;