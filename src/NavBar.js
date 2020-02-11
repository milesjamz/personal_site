import React from 'react';
import {
  Link
} from "react-router-dom";

class NavBar extends React.Component {

state = {
  toggle:''
}

handleOnChange = (e) => {
  console.log('heeheehee', e.target.value)
  this.setState({ toggle: e.target.value })
}

render() {

 const options = [ ['🌴', 'summer'],['❄️','winter'],['🌻','spring'],['🍂','autumn'] ]   

const makeTheButtons = seasons => {
  return seasons.map((season, index) => {
    return <div key={'radio div ' + index}>
             <input type="radio"
                    id={index}
                    key={'input ' +index}
                className="switch-input"  
                value={season[1]}
                onChange={this.handleOnChange}
                checked={this.state.toggle === season[1]}
  />
<label key={'label ' + index}>{season[0]}</label></div>
  })
}
  return (
    <div className="navbar">
    <Link to='/' ><span style={{color:'red'}}>* * m i l e s  - = - m a r i l l o  * *</span></Link><br/>
      <Link to='/about'> <span style={{color:'yellow'}}>A</span> bout Me </Link> || 
      <Link to='/projects'> <span style={{color:'yellow'}}>P</span> rojects </Link> ||
      <Link to='/cv'>  <span style={{color:'yellow'}}>C</span> V </Link> ||
      <div className="navContainer">
{makeTheButtons(options)}
        </div>
        </div>
  );
}
}

export default NavBar;