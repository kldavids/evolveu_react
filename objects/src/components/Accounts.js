import Account from './Account';

class Accounts {
  constructor () {
    this.accountList = [];
    this.counter = 1;
  }

  addAccount (accName, startBalance){
    const newAccount = new Account (this.counter, accName, startBalance);
    this.accountList.push(newAccount);
    this.counter++;
  };

  removeAccount (removeId){
    const tempList = this.accountList.filter(item => {
      return item.accId !== removeId;
    })
    this.accountList = tempList;
  }
  
  totalAccounts (){
    let totalBalance = this.accountList.reduce((acc, curr) => {
        return acc += curr.accBalance;
      }, 0);
      return totalBalance;
    }

  maxAccount (){

  }

  minAccount (){

  }



}

export default Accounts;