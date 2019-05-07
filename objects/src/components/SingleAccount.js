import React from 'react';
import Account from './Account';

class SingleAccount extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      accBalance: "",
      myAccount: {}
    }
  }

// methods to handle all click events for buttons
// create my first account
  onCreateClick = () => {
    console.log("in onCreate");
    const startBalance = Number(document.getElementById("startBalance").value);
    console.log("initial balance", startBalance);
    this.setState({myAccount: new Account(0, "First Account", startBalance), accBalance: startBalance});
   
  }

  // deposit button
  onDepositClick = () => {
    console.log("in onDeposit");
    const amount = Number(document.getElementById("amount").value);
    console.log("dep amount", amount);
    this.setState({accBalance: this.state.myAccount.depositAmt(amount)})
  }

  // withdraw button
  onWithdrawClick = () => {
    console.log("in onWithdraw");
    const amount = Number(document.getElementById("amount").value);
    console.log("withdraw amount", amount);
    this.setState({accBalance: this.state.myAccount.withdrawAmt(amount)})
  }

  // check balance button?


  render(){
    return(
      <div className="single-account">
        <h1>Fishing for MONEY</h1>
        <h3>{this.state.myAccount.accName}</h3>
          <div> 
            <input id="startBalance" type="number" placeholder="Enter Initial Balance" />
            <br />
            <button className="text-btn" onClick={this.onCreateClick}>Create Account</button>

            <hr /> 
            <input id="amount" type="number" placeholder="Enter amount" />
            <br />
            <button id="depositAmt" className="text-btn" onClick={this.onDepositClick}>Deposit</button>
            <button id="withdrawAmt" className="text-btn" onClick={this.onWithdrawClick}>Withdraw</button>
            <h3>Account Balance: ${this.state.myAccount.accBalance} </h3>
            {console.log("balance", this.state.myAccount.accBalance)}
          </div>
      </div>
    )
  }
}

export default SingleAccount;

