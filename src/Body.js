import React from 'react';

function Body(props) {
  return (
    <div className="body">
      <h1>Miles Marillo</h1>
      <h3>Fullstack Engineer</h3>
      <img src={props.pic} height="200em" alt='me, at the computer'></img>
      <hr></hr>
      <h3>About Me:</h3>
      <p>
      Miles Marillo is an NYC-based full stack software engineer - working in a variety of front and back end languages and frameworks, including React, Node, JavaScript/TypeScript, HTML5/CSS, Ruby/Rails, Gatsby.js, and anything else that strikes his fancy.<br/>
        He enjoys building products which help users lead richer, fuller, more human lives, not reduce them to extensions of an algorithm.<br/>
        His interests are data visualization and analysis, intuitive and beautiful user experiences, and music.<br/>
        He is available for full-time, part-time, and contract work.
      </p>
      <h2>PROJECTS:</h2>
    </div>
  );
}

export default Body;