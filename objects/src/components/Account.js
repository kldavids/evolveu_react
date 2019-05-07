class Account {
  constructor(accId, accName, startBalance){
    // console.log("The account is being created");
    this.accId = accId;
    this.accName = accName;
    this.accBalance = startBalance;
  }

  depositAmt(amount) {
    this.accBalance += amount;
    return this.accBalance;
  }

  withdrawAmt(amount) {
    this.accBalance -= amount;
    return this.accBalance;
  }

  currentBalance(){
    return this.accBalance;
  }
}

export default Account;