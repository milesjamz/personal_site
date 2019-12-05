import React, { useState } from 'react';

function Projects() {
	const [count, setCount] = useState(0);
	const colorsMa = ['blue','green','yellow',
	'orange','red','pink','black','gold','grey','cyan','navy','aliceblue',
	'antiquewhite','aquamarine','azure','beige','bisque','blueviolet','brown',
	'chartreuse','chocolate','cornflowerblue','crimson','darkmagenta']
  return (
    <div className="projects">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me to go up
      </button>
      <button onClick={() => setCount(count - 1)}>
        Click me to go down
      </button><br/>
      <canvas width={640} height={425} 
      style={{"background-color":colorsMa[count] }} />
    </div>
  );
}

export default Projects;