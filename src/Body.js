import React from 'react';

function Body(props) {

  // <strong>Miles Marillo</strong><br/>
  // <em>Full Stack Engineer</em><br/>
  // <img src={props.pic} height="400em" alt='me, at the computer'></img>
  // <canvas className='myCanvas'><p>My fallback message</p></canvas>


  let art = String.raw`
   __  __ _ _              __  __           _ _ _     
  |  \/  (_) |           |  \/  |          (_) | |    
  | \  / |_| | ___  ___  | \  / | __ _ _ __ _| | | ___ 
  | |\/| | | |/ _ \/ __| | |\/| |/ _\`| '__| | | |/ _ \
  | |  | | | |  __/\__ \ | |  | | (_| | |  | | | | (_)|
  |_|  |_|_|_|\___||___/ |_|  |_|\__,_|_|  |_|_|_|\___/ 
 `
  console.log(art);  
  
  return (
    <div className="body">

      <p>
        I enjoy building things that help people lead richer, fuller, more human lives, not reduce them to extensions of an algorithm.<br/>
        My interests are data visualization, intuitive and beautiful user experiences, and music.<br/>
        Available for full-time, part-time, and contract work.
      </p>
      <h3>OPEN SOURCE PROJECTS:</h3>
    </div>
  );
}

export default Body;