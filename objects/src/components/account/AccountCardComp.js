import React, { Component } from 'react';

class AccountCardComp extends Component {

	render() {
		return (
			<div className="accountCards">
				<h3>{this.props.accData.accName}</h3>
				<h4>Account ID: {this.props.accData.accID}</h4>
				<h4>Account Balance: ${this.props.accData.accBalance}</h4>

			</div>
		);
	}
}

export default AccountCardComp;