import React from 'react';

class Etc extends React.Component {

state = {
	formName: ''
}

handleChange = (e) => {
	this.setState({ formName: e.target.value })
}

handleSubmit = (e) => {
	e.preventDefault()
	let phrase = this.state.formName
		let newPhrase = phrase.split('').join(' ').toLowerCase()
	console.log(newPhrase)
}

newPhrase = () => {
	return this.state.formName.split('').join(' ').toLowerCase()
}

render() {
  return (
    <div className="etc">
    	<form onSubmit={this.handleSubmit} >
    		<label>
    		Enter text here to give it a e s t h e t i c<br/>
    		<input type="text" 
    		value={this.state.formName}
    		onChange={this.handleChange}
    		name="name" />
    		</label>
    		<input type="submit" value="Submit" />
    	</form>
    	{this.newPhrase()}
    </div>
  );
	}
}
export default Etc;