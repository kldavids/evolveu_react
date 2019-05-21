import React, { Component } from 'react';

class AccountForm extends Component {
	constructor(props){
		super(props);
		this.state = {
			accName: "",
			accBalance: "",
			amount: ""
		};
	}

	onAccountUpdate = (e) => {
		const {name, value } = e.target;
		this.setState({ 
			[name] : value
		});
	}

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmit(this.state);
	}

	render() {
		
		return (
			<form onSubmit={this.onFormSubmit}>
				<label>Change Name</label>
				<input type="text" name="accName" value={this.state.accName} onChange={this.onAccountUpdate} />
				<label>Change Balance</label>
				<input type="number" name="accBalance" value={this.state.accBalance} onChange={this.onAccountUpdate} />
				<button type="submit">Submit changes</button>

			</form>
	
		);
	}
}

export default AccountForm;