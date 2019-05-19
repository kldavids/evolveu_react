import React from 'react';
import AccountsTable from './AccountsTableComp';
import AccountCardComp from './AccountCardComp';
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
    }
  }
  
 onAddClick = () => {
		this.accControl.addAccount(null, "new account", "default user");
		this.setState({accControl: this.accControl});
  };


  render(){
    const accountCard = this.state.accControl.accountList.map(item => {
			return (
				<li className="accountCard" key={item.accID}>
					<AccountCardComp 
						accData={item} 
					/>
				</li>
			);
		});
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
            <button className="text-btn" onClick={this.onAddClick}>Add Account</button>
        </header>
        <AccountsTable 
          
        />
      </div>


    )
  }
}

export default AccountsApp;