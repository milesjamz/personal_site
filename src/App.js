import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Body from './Body'
// import CV from './Cv'
import Projects from './Projects'
// import Video from './Video'
import Resume from './mmarillo2021.pdf'
import Pic from './images/IMG_0888.jpg'

// import {
//   Switch,
//   Route,
// } from "react-router-dom";

//  const options = [ ['🌴', 'summer'],['❄️','winter'],['🌻','spring'],['🍂','autumn'] ]   

// const makeTheButtons = seasons => {
//   return seasons.map((season, index) => {
//     return <div className="radioButton" key={'radio div ' + index}>
//              <input type="radio"
//                     id={index}
//                     key={'input ' +index}
//                 className="switch-input"  
//                 value={season[1]}
//                 onChange={props.onChange}
//                 checked={props.toggle === season[1]}
//   />
// <label key={'label ' + index}>{season[0]}</label></div>
//   })
// }


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