import Node from './Node';

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentNode = null;
    this.length = 0;
  }

  size() {
    return this.length;
  }

  showCurrentSubject(){
    if(this.currentNode === null){
      return "Empty";
    }
    return this.currentNode.subject;
  }

  showCurrentAmount(){
    if(this.currentNode === null){
      return "Empty";
    }
    return this.currentNode.amount;
  }

  firstNode() {
    if (this.length > 0) {
      this.currentNode = this.head;
    }
    return this.currentNode.subject;
  }

  lastNode(){
    if (this.length > 0) {
      this.currentNode = this.tail;
    }
    return this.currentNode.subject;
  }

  nextNode(){
    if (this.length > 0 && this.currentNode.next !== null) {
      this.currentNode = this.currentNode.next;
    }
    return this.currentNode.subject;
  } 

  previousNode(){
    if (this.length > 0 && this.currentNode.prev !== null) {
      this.currentNode = this.currentNode.prev;
    }
    return this.currentNode.subject;
  }
  
  addNode(subject, amount) {
    const node = new Node(subject, amount);

    // no nodes in the list yet
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      this.currentNode = node;
    
    // existing nodes in the list, could add node anywhere 
    // as long as you first indicate the current node
    } else if (this.currentNode.next !== null) {
      node.next = this.currentNode.next;
      node.prev = this.currentNode;
      
      this.currentNode.next.prev = node;
      this.currentNode.next = node;
      this.currentNode = node;
      
    // add a node to the end of the list  
    } else {
      node.prev = this.currentNode;
      this.currentNode.next = node;
      this.tail = node;
      this.currentNode = node;
    }
    this.length++;
  }

  deleteNode(subject) {
    // check to see if any nodes are available.
    if (this.length === 0) {
      return "All nodes have been removed.";
    
    // check to see if deleting last node, if so reset
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.currentNode = null;

    // delete the Head node
    } else if (this.currentNode.prev === null && this.currentNode.next !== null) {
      this.head = this.currentNode.next;
      this.currentNode.next.prev = null;
      this.currentNode = this.currentNode.next;

    // delete the Tail node
    } else if (this.currentNode.next === null && this.currentNode.prev !== null) {
      this.currentNode.prev.next = null;
      this.tail = this.currentNode.prev;
      this.currentNode = this.currentNode.prev;

    // delete a node between two nodes
    } else {
      this.currentNode.prev.next = this.currentNode.next;
      this.currentNode.next.prev = this.currentNode.prev;
      this.currentNode = this.currentNode.next;
    }
    this.length--;
  }

  totalAmount() {
    let total = 0;
    let start = this.head;

    while (start !== null) {
      // console.log("amount", start.amount);
      total += start.amount;
      start = start.next;
     console.log("total is ", total);
      }
      return total;
  }
}

export default LinkedList;
