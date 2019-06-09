import Node from './Node';

const head = Symbol("head");

class LinkedList {
  constructor() {
    this[head] = null;

  }

  first() {

  }

  last(){

  }

  next(){

  } 

  previous(){

  }

  add(subject, amount){
    const newNode = new Node(subject, amount);

    // no nodes in the list yet
    if (this[head] === null) {
      this[head] = newNode;
    } else {
      // current used to track the node being used
      let current = this[head];
      // follow each next pointer until the end
      while (current.next !== null ) {
        current = current.next;
      }
      // at this point current is equal to last node in list.
      current.next = newNode;
    }
  }









}

export default LinkedList;
