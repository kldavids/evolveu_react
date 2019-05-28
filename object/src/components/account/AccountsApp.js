import React from 'react';
import AccountsTable from './AccountsTableComp';
import AccountEdit from './AccountEditComp';
import Accounts from './Accounts';
import './AccountsApp.css';

class AccountsApp extends React.Component {
  constructor (props){
    super(props);
    this.accControl = new Accounts ();
    this.accControl.addAccount("KD Saving", 250);
    this.accControl.addAccount("RD Checking", 160);
    this.accControl.addAccount("CD Saving", 50);
 
    this.state = {
      accControl: this.accControl,
      editId: null
    };
  }

  addAccountClick = (e) => {
    const newAccount = (document.getElementById("newName").value);
    const newBalance = Number(document.getElementById("newBalance").value);
		this.accControl.addAccount(newAccount, newBalance);
    this.setState({accControl: this.accControl});
    // add following lines to clear input fields between entries
    document.getElementById("newName").value = "";
    document.getElementById("newBalance").value = "";
    
  }

  remAccountClick = (e) => {
    // console.log("what is e", e);
    console.log("e target id", e.target.id);
    console.log("length?", e.target.id.length);
    
    const removeId = Number((e.target.id).slice(3, e.target.id.length));
		this.accControl.removeAccount(removeId);
		this.setState({accControl: this.accControl});
  }
    
  editAccountClick = (e) => {
    console.log("edit clicked");
    console.log("e target id", e.target.id);

    const editId = Number((e.target.id).slice(4, e.target.id.length));
    console.log(editId);
		const indexAccountList = this.accControl.accountList.findIndex(item => item.accId === editId)
    this.setState({editId: indexAccountList});
    console.log(indexAccountList);
  }

  onChangeAccount = () => {
    this.setState({accControl: this.accControl});  
  }

  closeEditWindow = () => {
    this.setState({editId: null})
  }

  render() {

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
        </header>
        <div>
          <div className="createAccount">
            <div className="input-group input-group-lg">
              <input type="text" id="newName" placeholder="Name for Account"/>
              <input type="number" id="newBalance" placeholder="Starting Balance "/>
              <button className="text-btn" onClick={this.addAccountClick}>Add Account</button>
            </div>
          </div>
          <div >
              {this.state.editId !== null 
                ? <AccountEdit
                  accData={this.accControl.accountList[this.state.editId]}
                  editId={this.state.editId}
                  onChangeAccount={this.onChangeAccount}
                  closeEditWindow={this.closeEditWindow}
                /> 
                : ""}
          </div>
        </div>
        <hr />
        <div>
          <AccountsTable 
            accData={this.state.accControl.accountList}
            remAccountClick={this.remAccountClick}
            editAccountClick={this.editAccountClick}
          />
        </div>

      </div>
    )
  }
}

export default AccountsApp;