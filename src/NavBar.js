import React from 'react';
import {
  Route,
  Link
} from "react-router-dom";



function NavBar() {

  return (
    <div className="navbar">
    * * m i l e s  - = - m a r i l l o  * *<br/>
      <Link to='/about'> <span style={{color:'yellow'}}>A</span> bout Me </Link> || 
      <Link to='/body'> <span style={{color:'yellow'}}>B</span> ody </Link> || 
      <Link to='/projects'> <span style={{color:'yellow'}}>P</span> rojects </Link> ||
      <Link to='/cv'>  <span style={{color:'yellow'}}>C</span> V </Link> || 
      <Link to='/etc'> <span style={{color:'yellow'}}>E</span> tc </Link> ||
      <Link to='/practice'> <span style={{color:'yellow'}}>P</span> ractice </Link>
    </div>
  );
}

export default NavBar;