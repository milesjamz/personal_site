import React from 'react';

function Body(props) {
  return (
    <div className="body">
      <h1>Miles Marillo</h1>
      <h3>Fullstack Engineer</h3>
      <img src={props.pic} height="400em" alt='me, at the computer'></img>
      <h2>ABOUT:</h2>
      <p>
      Hey, I'm a New York based full stack software engineer. <br/>
        I enjoy building products that help users lead richer, fuller, more human lives, not reduce them to extensions of an algorithm.<br/>
        My interests are data visualization, intuitive and beautiful user experiences, and music.<br/>
        Available for full-time, part-time, and contract work.
      </p>
      <h2>PROJECTS:</h2>
    </div>
  );
}

export default Body;