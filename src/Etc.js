import React from 'react';

class Etc extends React.Component {

state = {
	formName: '',
	formNameTwo: ''
}

handleChange = (e) => {
	this.setState({ formName: e.target.value })
}

handleChangeTwo = e => {
	this.setState({ formNameTwo: e.target.value })
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
		<br />
		<form onSubmit={this.handleSecondSubmit} >
			<label>
				Enter text here to see if it's valid or not.<br />
				<input type="text"
					value={this.state.fromNameTwo}
					onChange={this.handleChangeTwo}
					name="thang" />
			</label>
				<input type="submit" value="Submit" />
		</form>
    	{this.newPhrase()}
    </div>
  );
	}
}
export default Etc;