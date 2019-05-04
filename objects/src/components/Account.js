class Account {
  constructor(id, accountName, startBalance){
    // console.log("The account is being created");
    this.accountId = id;
    this.accountName = accountName;
    this.accountBalance = startBalance;
  }

  depositAmt(amount) {
    this.accountBalance += amount;
    return this.accountBalance;
  }

  withdrawAmt(amount) {
    this.accountBalance -= amount;
    return this.accountBalance;
  }

  currentBalance(){
    return this.accountBalance;
  }
}

export default Account;