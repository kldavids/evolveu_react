import React from 'react';
import Account from './Account';
import './AccountComp.css';

class AccountComp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accBalance: "",
      myAccount: {}
    }
  }

// methods to handle all click events for buttons

  onCreateClick = () => {
    const startBalance = Number(document.getElementById("startBalance").value);
    this.setState({myAccount: new Account(1, "KD Savings", startBalance), accBalance: startBalance});
    document.getElementById("startBalance").value = "";
  }

   handleButtonDeposit = () => {
    const amount = Number(document.getElementById("amount").value);
    this.setState({accBalance: this.state.myAccount.depositAmt(amount)})
    document.getElementById("amount").value = "";
  }

  handleButtonWithdraw = () => {
    const amount = Number(document.getElementById("amount").value);
    this.setState({accBalance: this.state.myAccount.withdrawAmt(amount)})
    document.getElementById("amount").value = "";
  }

  render(){
    return(
      <div className="single-account">
        <h1>Fishing for MONEY</h1>
        <h4>Account Name: {this.state.myAccount.accName} </h4>
        <h4>Account Id: {this.state.myAccount.accId}</h4>
        <div> 
          <input id="startBalance" type="number" placeholder="Enter Initial Balance" />
          <br />
          <button className="text-btn" onClick={this.onCreateClick}>Create Account</button>
          <hr /> 
          <input id="amount" type="number" placeholder="Enter amount" />
          <br />
          <button id="depositAmt" className="text-btn" onClick={this.handleButtonDeposit}>Deposit</button>
          <button id="withdrawAmt" className="text-btn" onClick={this.handleButtonWithdraw}>Withdraw</button>
          <h4>Account Balance: ${this.state.myAccount.accBalance} </h4>  
        </div>  
      </div>
    )
  }
}

export default AccountComp;

