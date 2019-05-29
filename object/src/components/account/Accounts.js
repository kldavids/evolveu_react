import Account from './Account';

class Accounts {
  constructor () {
    this.accountList = [];
    this.counter = 1;
  }

  addAccount (accName, accBalance){
    const tempAccount = new Account (this.counter, accName, accBalance);
    this.accountList.push(tempAccount);
    this.counter++;
  }

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
    if(this.accountList.length > 0) {
      let maxBalance = this.accountList[0].accBalance;
      this.accountList.forEach(item => {
        if(item.accBalance > maxBalance){
          maxBalance = item.accBalance;
        };
      });
      return maxBalance;
    }
  }
  
  minAccount (){
    if(this.accountList.length > 0) {
      let minBalance = this.accountList[0].accBalance;
        this.accountList.forEach(item => {
          if(item.accBalance < minBalance){
            minBalance = item.accBalance;
          };
        });
      return minBalance;
    } 
  }

}

export default Accounts;