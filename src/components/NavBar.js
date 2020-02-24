import React from 'react';
import {
  Link
} from "react-router-dom";

function NavBar(props) {

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

  return (
    <div className="navbar">
    <Link to='/' ><span id="nameTitle">- = M i l e s -=- M a r i l l o = -</span></Link> 
<br/>       
      <div className='menuLinks'><Link to='/about'> <span style={{color:'yellow'}}>A</span> bout Me </Link> || 
      <Link to='/projects'> <span style={{color:'yellow'}}>P</span> rojects </Link> ||
      <Link to='/cv'>  <span style={{color:'yellow'}}>C</span> V </Link>
      </div>
        </div>
  );
}

export default NavBar;