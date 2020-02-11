import React from 'react';
import {
  Link
} from "react-router-dom";

function NavBar() {

  return (
    <div className="navbar">
    <Link to='/' ><span style={{color:'red'}}>* * m i l e s  - = - m a r i l l o  * *</span></Link><br/>
      <Link to='/about'> <span style={{color:'yellow'}}>A</span> bout Me </Link> || 
      <Link to='/projects'> <span style={{color:'yellow'}}>P</span> rojects </Link> ||
      <Link to='/cv'>  <span style={{color:'yellow'}}>C</span> V </Link>
    </div>
  );
}

export default NavBar;