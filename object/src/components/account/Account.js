class Account {
  constructor(accId, accName, startBalance){
    // console.log("The account is being created");
    this.accId = accId;
    this.accName = accName;
    this.accBalance = startBalance;
  }

  depositAmt(amount) {
    if(amount > 0) {
    this.accBalance += amount;
    } else {
      alert("Entered a Negative Number or Not a Number");
    }
    return this.accBalance;
  }

  withdrawAmt(amount) {
    if(amount > 0) {
    this.accBalance -= amount;
    } else {
      alert("Entered a Negative Number or Not a Number");
    }
    return this.accBalance;
  }

  currentBalance(){
    return this.accBalance;
  }
}

export default Account;