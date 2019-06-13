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

  firstNode() {
    if (this.length > 0) {
      this.currentNode = this.head;
      return this.currentNode.subject;
    }
  }

  lastNode(){
    if (this.length > 0) {
      this.currentNode = this.tail;
      return this.currentNode.subject;
    }
  }

  nextNode(){
    if (this.length > 0 && this.currentNode.next !== null) {
      this.currentNode = this.currentNode.next;
      return this.currentNode.subject;
    } else {
      return "End of the LinkedList";
    }
  } 

  previousNode(){
    if (this.length > 0 && this.currentNode.prev !== null) {
      this.currentNode = this.currentNode.prev;
      return this.currentNode.subject;
    } else {
      return "Start of the LinkedList";
    }

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
      node.prev = this.currentNode;
      node.next = this.currentNode.next;

      this.currentNode.next = node;
      this.currentNode.next.prev = node;
      this.currentNode = node;
    
    // add a node to the end of the list  
    } else {
      this.tail = node;
      node.prev = this.currentNode;
      this.currentNode.next = node;
      this.currentNode = node;
    }

    this.length++;
  }

  deleteNode(subject) {
    this.currentNode = this.head;
    let previousNode = null;

    // iterate over the list
    while (this.currentNode !== null) {
      // compare subject with currentNode subject
      // if found then remove
      if (this.currentNode.subject === subject) {
        this.head = this.currentNode.next;
      } else {
        while (this.currentNode.subject !== subject) {
          previousNode = this.currentNode;
          this.currentNode = this.currentNode.next; 
        }
        previousNode.next = this.currentNode.next;
        if (previousNode.next === null) {
          this.tail = previousNode;
        }
      }
      this.length--;
      // console.log("subject?", this.currentNode.subject);
      return this.currentNode.subject;
    }
  }

  totalAmount() {
    let total = 0;
    this.currentNode = this.head;

    while (this.currentNode !== null) {
      // console.log("amount", this.currentNode.amount);
      total += this.currentNode.amount;
      this.currentNode = this.currentNode.next;
     // console.log("total is ", total);
      }
      return total;
    }
  }

  
  // listSize() {
  //   // the list is empty
  //   if (this.head === null) {
  //     return 0;
  //   }
  //   // use currentNode to iterate over the list of nodes
  //   let currentNode = this.head;
  //   // use count to track how many nodes
  //   let count = 0;

  //   while (currentNode !== null) {
  //     count++;
  //     currentNode = currentNode.next;
  //   }
  //   // when currentNode is null, loop is completed and we have count total
  //   return count;
  // }

  // indexOf(subject) {
  //   // currentNode is used to iterate over the list of nodes
  //   let currentNode = this.head;
  //   // index is used to track the list items
  //   let index = -1;
  //   // loop checks each node in the list to see if it matches 'subject'
  //   while (currentNode !== null) {
  //     // keep track of where we are
  //     index++;
  //     // if match is found it returns index
  //     if (currentNode.subject === subject) {
  //       return index;
  //     }
  //     // move to the next node in the list
  //     currentNode = currentNode.next;
  //   }
  //   // at end of the list and did not find match for 'subject', -1 means not found
  //   return -1;
  // }

  // subjectAt(index) {
  //   let currentNode = this.head;
  //   let count = 0;
  //   while (count < index) {
  //     count++;
  //     currentNode = currentNode.next;
  //   }
  //   return currentNode.subject;
  // }

// }

export default LinkedList;
