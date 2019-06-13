class Node {
  constructor(subject, amount, next, prev){
    this.subject = subject;
    this.amount = amount;
    this.next = null;
    this.prev = null;
  }

  show() {
    return (`Subject:  ${this.subject}  Amount:  ${this.amount}`)
  }

}
export default Node;