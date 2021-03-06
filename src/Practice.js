import React from 'react';

class Practice extends React.Component {


  render() {

  return (
    <div className="practice">
    oh jeez.<br/>
    <tab>I'm doin data structures, algorithms, things like that. you know how it do.<br/>
    </tab>Dang.
    </div>
  );
  }
}

export default Practice;


state = {
  count: 0,
  clues: []
}

myApi = 'http://jservice.io/api/clues'

colorsMa = ['blue','green','yellow',
'orange','red','pink','black','gold','grey','cyan','navy','aliceblue',
'antiquewhite','aquamarine','azure','beige','bisque','blueviolet','brown',
'chartreuse','chocolate','cornflowerblue','crimson','darkmagenta', 'fuschia']

componentDidMount() {
  fetch(this.myApi)
.then(resp => resp.json())
.then(parsedResp => this.setState({ clues: parsedResp }) )
}

render() {
  const showMyClues = () => {
    console.log('emm')
    return this.state.clues.map(clue => {
      return <li> <b>{clue.question}</b> --- {clue.answer} </li>
    })
  }

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
    style={{backgroundColor:this.colorsMa[this.state.count] }} />
  </div>
);
}
}