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
      <button onClick={() => aboot()}> <span style={{color:'yellow'}}>A</span> bout Me </button> || 
      <button onClick={() => body()}> <span style={{color:'yellow'}}>B</span> ody </button> || 
      <button onClick={() => proojects()}> <span style={{color:'yellow'}}>P</span> rojects </button> ||
      <button onClick={() => seevea()}>  <span style={{color:'yellow'}}>C</span> V </button> || 
      <button onClick={() => etcetera()}> <span style={{color:'yellow'}}>E</span> tc </button>
    </div>
  );
}

export default NavBar;