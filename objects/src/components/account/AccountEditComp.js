import React, { Component } from 'react';

class AccountEdit extends Component {
	constructor(props){
		super(props);
	}

	handleButtonDeposit = () => {
    const amount = Number(document.getElementById("amount").value);
		this.props.accData.depositAmt(amount);
		this.props.onChangeAccount();
		document.getElementById("amount").value = "";
  }

  handleButtonWithdraw = () => {
    const amount = Number(document.getElementById("amount").value);
		this.props.accData.withdrawAmt(amount);
		this.props.onChangeAccount();
    document.getElementById("amount").value = "";
  }

	render() {
		
		return (
			<div className="accountToEdit">
        <h4><strong>Account Name: </strong>{this.props.accData.accName}</h4>
				<h4><strong>Account Id: </strong>{this.props.accData.accId}</h4>
        <div className="input-group input-group-lg"> 
          <input id="amount" type="number" placeholder="Enter amount" />
          <br />
          <button id="depositAmt" className="text-btn" onClick={this.handleButtonDeposit}>Deposit</button>
          <button id="withdrawAmt" className="text-btn" onClick={this.handleButtonWithdraw}>Withdraw</button>
        </div>  
      </div>
		);
	}
}

export default AccountEdit;