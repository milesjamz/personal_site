import React from 'react';

function Body(props) {

  // <strong>Miles Marillo</strong><br/>
  // <em>Full Stack Engineer</em><br/>
  // <img src={props.pic} height="400em" alt='me, at the computer'></img>
  // <canvas className='myCanvas'><p>My fallback message</p></canvas>


  let art = String.raw`
   __  __ _ _             __  __            _ _ _     
  |  \/  (_) |           |  \/  |          (_) | |    
  | \  / |_| | ___  ___  | \  / | __ _ _ __ _| | | ___ 
  | |\/| | | |/ _ \/ __| | |\/| |/ _\`| '__| | | |/ _ \
  | |  | | | |  __/\__ \ | |  | | (_| | |  | | | | (_)|
  |_|  |_|_|_|\___||___/ |_|  |_|\__,_|_|  |_|_|_|\___/ 
 `
  console.log(art);  
  var wrappedASCII = {__html: art };

  return (
    <div className="body">
        <span className='asciiArt' dangerouslySetInnerHTML={wrappedASCII}></span>
      <p>
      &nbsp;&nbsp;&nbsp;&nbsp;I'm a software engineer driven to make beautiful, easy to use &nbsp;&nbsp;&nbsp;&nbsp;tools and experiences which have positive impacts on a user's life.<br/>
       </p>
       <p> &nbsp;&nbsp;&nbsp;&nbsp;My interests are data visualization, intuitive and beautiful user &nbsp;&nbsp;&nbsp;&nbsp;experiences, and music.<br/>
       &nbsp;&nbsp;&nbsp;&nbsp;Available for full-time, part-time, and contract work.
      </p>
      <h3>OPEN SOURCE PROJECTS:</h3>
    </div>
  );
}

export default Body;