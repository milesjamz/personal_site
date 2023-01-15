import React from 'react';

function Body(props) {

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
    <div>
      <span className='asciiArt' dangerouslySetInnerHTML={wrappedASCII}></span>
    <div className="body">
        
      <p>
      I'm a software engineer driven to make beautiful, easy to use tools and experiences which have positive impacts on a user's life.<br/>
       </p>
       <p> My interests are data visualization, intuitive and beautiful user experiences, and music.<br/>
       Available for full-time, part-time, and contract work.
      </p>
      <h3>OPEN SOURCE PROJECTS:</h3>
    </div>
    </div>
  );
}

export default Body;