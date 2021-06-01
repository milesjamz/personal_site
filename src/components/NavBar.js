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
      <div className='menuLinks'>
      <button><a href="https://www.github.com/milesjamz" target='_blank' rel='noopener noreferrer'>Github</a></button> <button><a href="https://www.linkedin.com/in/milesjamz" target='_blank' rel='noopener noreferrer'>LinkedIn</a></button> <button><a href='/static/media/mmarillo2021.999b7930.pdf' download>CV</a></button> <button><a href='mailto:milesjmarillo@gmail.com'>Contact Me</a></button>
      </div>
        </div>
  );
}

export default NavBar;