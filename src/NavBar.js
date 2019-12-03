import React from 'react';

function NavBar() {


const aboot = () => alert('ABOOT')
const body = () => alert('BODY')
const proojects = () => alert('PROOOOJECTS')
const seevea = () => alert('SEE VEE HEE HEE')
const etcetera = () => alert('ET CET ERRR UHH')

  return (
    <div className="navbar">
    * * m i l e s  - = - m a r i l l o  * *<br/>
      <button onClick={() => aboot()}> About Me </button> || 
      <button onClick={() => body()}> Body </button> || 
      <button onClick={() => proojects()}> Projects </button> ||
      <button onClick={() => seevea()}>  CV </button> || 
      <button onClick={() => etcetera()}> Etc </button>
    </div>
  );
}

export default NavBar;