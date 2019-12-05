import React from 'react';

class Projects extends React.Component {

  state = {
    count: 0
  }

	colorsMa = ['blue','green','yellow',
	'orange','red','pink','black','gold','grey','cyan','navy','aliceblue',
	'antiquewhite','aquamarine','azure','beige','bisque','blueviolet','brown',
	'chartreuse','chocolate','cornflowerblue','crimson','darkmagenta', 'fuschia']
  
  tick = () => this.state.count === 25 ? this.setState({ count: 0 })  : this.setState ({ count: this.state.count + 1 })

  componentDidMount() {
    setInterval( () => this.tick(), 1000 )
  }

  render() {
  return (
    <div className="projects">
      <p>You're on color number {this.state.count}.</p>
      <button onClick={() => this.setState({ count: this.state.count + 1 }) }>
        Click me to go the next color
      </button>
      <button onClick={() => this.setState({ count: this.state.count - 1 }) }>
        Click me to go to the previous color
      </button>< br/>
      <canvas width={640} height={425} 
      style={{"background-color":this.colorsMa[this.state.count] }} />
    </div>
  );
  }
}

export default Projects;

// import React, { useState } from 'react';

// function Projects() {
// 	const [count, setCount] = useState(0);
// 	const colorsMa = ['blue','green','yellow',
// 	'orange','red','pink','black','gold','grey','cyan','navy','aliceblue',
// 	'antiquewhite','aquamarine','azure','beige','bisque','blueviolet','brown',
// 	'chartreuse','chocolate','cornflowerblue','crimson','darkmagenta', 'fuschia']
  
//   const tick = () => setCount(count + 1)

//   const tickTock = () => {
//     setInterval( () => tick(), 1000 )
//   }

//   return (
//     <div className="projects">
//       <p>You're on color number {count}.</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me to go the next color
//       </button>
//       <button onClick={() => setCount(count - 1)}>
//         Click me to go to the previous color
//       </button><br/>
//       <canvas width={640} height={425} 
//       style={{"background-color":colorsMa[count] }} />
//       {tickTock()}
//     </div>
//   );
// }

// export default Projects;