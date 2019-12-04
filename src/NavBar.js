import React from 'react';
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function NavBar() {


// const aboot = () => alert('ABOOT')
// const body = () => alert('BODY')
// const proojects = () => alert('PROOOOJECTS')
// const seevea = () => alert('SEE VEE HEE HEE')
// const etcetera = () => alert('ET CET ERRR UHH')

  return (
    <div className="navbar">
    * * m i l e s  - = - m a r i l l o  * *<br/>
      <Link to='/about'> <span style={{color:'yellow'}}>A</span> bout Me </Link> || 
      <Link to='/body'> <span style={{color:'yellow'}}>B</span> ody </Link> || 
      <Link to='/projects'> <span style={{color:'yellow'}}>P</span> rojects </Link> ||
      <Link to='/cv'>  <span style={{color:'yellow'}}>C</span> V </Link> || 
      <Link to='/etc'> <span style={{color:'yellow'}}>E</span> tc </Link>
    </div>
  );
}

export default NavBar;