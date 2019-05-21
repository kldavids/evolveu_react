import React, { Component } from 'react';

class AccountCardComp extends Component {

	render() {
		return (
			<div className="accountCards">
				<h3>{this.props.accountData.accountName}</h3>
				<h4>Account ID: {this.props.accountData.accountID}</h4>
				<h4>Account Balance: ${this.props.accountData.balance}</h4>
				<button className="btns" type="button" id={"mng"+this.props.accountData.accountID} onClick={this.props.mngBtn}>Manage Account</button>
				<button className="btns" type="button" id={"del"+this.props.accountData.accountID} onClick={this.props.delBtn}>Delete Account</button>
			</div>
		);
	}
}

export default AccountCardComp;

//-----------------------------------

import React, { Component } from "react";

import AccountsCtrl from "./AccountsCtrl";
import AccountCardComp from "./AccountCardComp";
import AccountComp from "./AccountComp";

import "./AccountApp.css";

class AccountApp extends Component {
	constructor() {
		super();
		this.ctrl = new AccountsCtrl();
		this.state = {
			ctrl: this.ctrl,
			displayIndex: null
		}
		this.addAccountClick = this.addAccountClick.bind(this);
		this.mngAccountClick = this.mngAccountClick.bind(this);
		this.deleteAccountClick = this.deleteAccountClick.bind(this);
		this.closeWindowClick = this.closeWindowClick.bind(this);
		this.updateAccount = this.updateAccount.bind(this);
	};

	deleteAccountClick(e) {
		const idDelete = Number((e.target.id).slice(3, e.target.id.length));
		this.ctrl.deleteAccount(idDelete);
		this.setState({ctrl: this.ctrl});
	}

	mngAccountClick(e) {
		const idMng = Number((e.target.id).slice(3, e.target.id.length));
		const indexMng = this.ctrl.accountList.findIndex(item => item.accountID === idMng)
		this.setState({displayIndex: indexMng});
	}

	addAccountClick() {
		this.ctrl.addAccount(null, "new account", "default user");
		this.setState({ctrl: this.ctrl});
	};

	closeWindowClick() {
		this.setState({displayIndex: null});
	};

	updateAccount() {
		this.setState({ctrl: this.ctrl});
		// this.setState({displayIndex: this.displayIndex});
	}

	render() {
		

		return(
			<div className="accountApp">
				<div className="header">
					<h1>EvolveU Bank</h1>
					{/* what is diff b/w this.ctrl and this.state.ctrl here???? */}
					<h3>Summary of Accounts</h3>
					<h4>Total of Account Balances: {this.ctrl.totalAccounts()}</h4>
					<h4>Max Account: {this.ctrl.maxAccount()}</h4>
					<h4>Min Account: {this.ctrl.minAccount()}</h4>
					<button className="btns" id="addBtn" type="button" onClick={this.addAccountClick}>Add Account</button>
				</div>

				<div className="containers">
					<div className="containerLeft">
						<ul className="cardList">{accountCard}</ul>
					</div>

					<div className="containerRight">
						{this.state.displayIndex !== null 
							? <AccountComp 
								accountData={this.ctrl.accountList[this.state.displayIndex]} 
								displayIndex={this.state.displayIndex}
								updateAccount={this.updateAccount} 
								closeWindowClick={this.closeWindowClick} 
								/> 
							: ""}
					</div>
				</div>

				<br /><br />
			</div>
		);
	};
};

export default AccountApp;


import React, { Component } from 'react';
import './AccountComp.css';

class AccountComp extends Component {
	constructor(props) {
		super(props);
		this.depositClick = this.depositClick.bind(this);
		this.withdrawClick = this.withdrawClick.bind(this);
		this.chgNameClick = this.chgNameClick.bind(this);
	};

	depositClick() {
		const depAmount = Number(document.getElementById("depositInput").value);
		this.props.accountData.deposit(depAmount);
		this.props.updateAccount();
		document.getElementById("depositInput").value = ""
	};

	withdrawClick() {
		const wdAmount = Number(document.getElementById("withdrawInput").value);
		this.props.accountData.withdraw(wdAmount);
		this.props.updateAccount();
		document.getElementById("withdrawInput").value = ""
	};

	chgNameClick() {
		const newName = document.getElementById("chgNameInput").value;
		this.props.accountData.accountName = newName;
		this.props.updateAccount();
		document.getElementById("chgNameInput").value = ""
	};

	render() {
		return(
			<div className="accountComp">
				<h4>{this.props.accountData.accountName}</h4>
				<h4>Account ID: {this.props.accountData.accountID}</h4>
				<h4>Account Balance: {this.props.accountData.balance}</h4>
				<br />
				<h5>Add account funds:</h5>
				<input id="depositInput" type="number"/>
				<button className="btns" id="depositBtn" type="button" onClick={this.depositClick}>Submit</button>
				<h5>Withdraw account funds:</h5>
				<input id="withdrawInput" type="number"/>
				<button className="btns" id="wdBtn" type="button" onClick={this.withdrawClick}>Submit</button>
				<h5>Change account name to:</h5>
				<input id="chgNameInput" type="text"/>
				<button className="btns" id="chgNameBtn" type="button" onClick={this.chgNameClick}>Submit</button>
				<br />
				<button className="btns" id="closeBtn" type="button" onClick={this.props.closeWindowClick}>Close Window</button>

				<br /><br />
			</div>
		);
	};
};

export default AccountComp;