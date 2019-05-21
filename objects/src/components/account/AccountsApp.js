import React from 'react';
import AccountsTable from './AccountsTableComp';
// import AccountForm from './AccountFormComp';
import Accounts from './Accounts';
import './AccountsApp.css';

class AccountsApp extends React.Component {
  constructor (props){
    super(props);
    this.accControl = new Accounts ();
    this.accControl.addAccount("KD Saving", 250);
    this.accControl.addAccount("KD Checking", 100);
    this.accControl.addAccount("RD Checking", 160);
    this.accControl.addAccount("CD Saving", 50);
 
    this.state = {
      accControl: this.accControl,
      accIndex: null
    }
  }

  addAccountClick = () => {
    const newAccount = (document.getElementById("newName").value);
    const newBalance = Number(document.getElementById("newBalance").value);

		this.accControl.addAccount(newAccount, newBalance);
    this.setState({accControl: this.accControl});
    document.getElementById("newName").value = "";
    document.getElementById("newBalance").value = "";
  };

  removeAccount = accIndex => {
    this.setState({ accControl: this.props.accountList.filter((account, i) => {
      return i !== accIndex;
      })
    });
  }

  


  
  render(){
    
    return(
      <div>
        <header>
          <h1>The Ocean Bank</h1>
          <div className="row my-3">
            <div className="col-4 text-center mb-2">
              <h3>Accounts Total: ${this.accControl.totalAccounts()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>Max Account: ${this.accControl.maxAccount()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>Min Account: ${this.accControl.minAccount()}</h3>
            </div>
          </div>
          <div className="input-group mb-3 input-group-lg">
            <input type="text" id="newName" placeholder="Name of Account"/>
            <input type="number" id="newBalance" placeholder="Initial Amount "/>
            <button className="text-btn" onClick={this.addAccountClick}>Add Account</button>  
          </div>
          <div>
          <AccountsTable 
            accData={this.state.accControl.accountList}
            removeAccount={this.removeAccount}
          />

          </div>
        </header>

    

        
        {/* <AccountForm handleSubmit={this.handleSubmit} /> */}
      </div>


    )
  }
}

export default AccountsApp;