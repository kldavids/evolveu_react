import React from 'react';
import Account from './Account';

class SingleAccount extends React.Component {
  constructor(){
    super();
    this.state = {
      myBalance: "",
      myaccount: {}
    }
  }

// methods to handle all click events for buttons
  // create an account
  onCreateClick = () => {
    console.log("in onCreate");
    const initialBalance = Number(document.getElementById("initialBalance").value);
    console.log("balance", initialBalance);
    this.setState({myaccount: new Account("savings", initialBalance, 1), myBalance: initialBalance});
  }
// console.log(myaccount);

  // deposit button
  onDepositClick = () => {
    console.log("in onDeposit");
    const amount = Number(document.getElementById("amount").value);
    console.log("dep amount", amount);
    // this.setState({myBalance: this.state.myaccount.deposit(amount)});
    // console.log("balance", this.myBalance);
  }

  // withdrawal button

  // check balance button?


  render(){
    return(
      <div className="single-account">
        <h2>My Account {this.whosAccount}</h2>
        <input 
          id="initialBalance" 
          type="number"
          placeholder="Enter a Balance"
          />
        <br />
        <button className="button" onClick={this.onCreateClick}>Create Account</button>
        <hr />
        <input 
          id="amount" 
          type="number"
          placeholder="Enter amount"
          />
        <br />
        <button className="button" onClick={this.onDepositClick}>Deposit</button>
        <button className="button" onClick={this.handleMath}>Withdrawal</button>
        
        <h3>Account Balance: {this.state.myBalance} </h3>
      </div>
    )
  }
}


export default SingleAccount;

