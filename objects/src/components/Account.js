class Account {

  constructor(accountName, initialBalance, id){
    // console.log("The account is being created");
    this.accountName = accountName;
    this.accountBalance = initialBalance;
    this.accountID = id;
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

// let BillAccount = new account("Bill", 100);
// console.log("acct details", BillAccount);
// console.log("Bill's balance?", BillAccount.depositAmt(10));
// console.log("Bill's balance?", BillAccount.withdrawAmt(45));

// let KayAccount = new account("Kay", 1000);
// console.log("acct details", KayAccount);


export default Account;