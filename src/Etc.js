import React from 'react';

class Etc extends React.Component {

state = {
	formNameTwo: ''
}

handleChangeTwo = e => {
	this.setState({ formNameTwo: e.target.value })
}

handleSecondSubmit = e => {
	e.preventDefault()
	alert(this.state.formNameTwo)
	console.log(this.state.formNameTwo)
}

render() {
  return (
    <div className="etc">
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
    </div>
  		);
	}
}
export default Etc;