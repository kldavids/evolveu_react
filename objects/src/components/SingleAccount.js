import React from 'react';

class SingleAccount extends React.Component {
  constructor(){
    super();
    this.state = {}
  }

  render(){
    return(
      <div className="single-account">
        <h2>Enter Account Details:</h2>
        Account Name: <input id="acctName" type="text"/><br></br>
        Initial Balance: <input id="initialBalance" type="number"/>
        
        <hr></hr>
        <button class="button" operator="Deposit" onClick={this.handleMath}>Deposit</button>
        <button class="button" operator="Withdrawal" onClick={this.handleMath}>Withdrawal</button>
        <button class="button" operator="Balance" onClick={this.handleMath}>Check Balance</button>
        <h3>Account Balance: ### </h3>
      </div>
    )
  }
}


export default SingleAccount;

