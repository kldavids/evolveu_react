import LinkedList from "./LinkedList"

test("test LinkedList class", () => {
	console.log("test LinkedList class instantiation");
	const testLinkedList = new LinkedList();
	console.log(testLinkedList);

	// * denotes current node
	// []
	console.log("test insert method for blank list (create first node)");
	testLinkedList.insertNode("node1", 1);
	console.log("create node1", testLinkedList);
	expect(testLinkedList.size).toBe(1);
	expect(testLinkedList.tail.subject).toBe("node1");	
	// [*node1]

	console.log("test insert method for second node");
	testLinkedList.insertNode("node2", 2);
	console.log("insert node2 after node1", testLinkedList);
	expect(testLinkedList.size).toBe(2);
	expect(testLinkedList.head.subject).toBe("node1");
	expect(testLinkedList.tail.subject).toBe("node2");	
	// [node1, *node2]

	console.log("test insert method for third node");
	testLinkedList.insertNode("node3", 3);
	console.log("insert node3 after node2", testLinkedList);
	expect(testLinkedList.size).toBe(3);
	expect(testLinkedList.head.subject).toBe("node1");
	expect(testLinkedList.tail.subject).toBe("node3");
	// [node1, node2, *node3]

	console.log("test insert method between node1 and node2");
	testLinkedList.current = testLinkedList.head;
	// [*node1, node2, node3]
	testLinkedList.insertNode("node4", 4);
	console.log("insert node4 after node1", testLinkedList);
	expect(testLinkedList.size).toBe(4);
	expect(testLinkedList.head.subject).toBe("node1");
	expect(testLinkedList.tail.subject).toBe("node3");
	// [node1, *node4, node2, node3]

	console.log("test nextNode method to move this.current to next node (from node4 to node2)");
	expect(testLinkedList.current.subject).toBe("node4")
	testLinkedList.nextNode();
	console.log("move current from node4 to node2", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node2");
	// [node1, node4, *node2, node3]

	console.log("test nextNode method if attempt to move this.current past end of list");
	testLinkedList.nextNode();
	testLinkedList.nextNode();
	console.log("attempt to move current past end of list", testLinkedList)
	expect(testLinkedList.current.subject).toBe("node3");
	// [node1, node4, node2, *node3]

	console.log("test previousNode method to move this.current to prev node (from node3 to node2)");
	expect(testLinkedList.current.subject).toBe("node3")
	testLinkedList.previousNode();
	console.log("move current from node3 to node2", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node2");
	// [node1, node4, *node2, node3]

	console.log("test previousNode method if attempt to move this.current past start of list");
	testLinkedList.previousNode();
	testLinkedList.previousNode();
	testLinkedList.previousNode();
	console.log("attempt to move current past start of list", testLinkedList)
	expect(testLinkedList.current.subject).toBe("node1");	
	// [*node1, node4, node2, node3]

	console.log("test lastNode method to move this.current to tail node (from node1 to node3)");
	expect(testLinkedList.current.subject).toBe("node1")
	testLinkedList.lastNode();
	console.log("move current from node1 to node3", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node3");
	// [node1, node4, node2, *node3]

	console.log("test firstNode method to move this.current to head node (from node3 to node1)");
	expect(testLinkedList.current.subject).toBe("node3")
	testLinkedList.firstNode();
	console.log("move current from node4 to node1", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node1");
	// [*node1, node4, node2, node3]

	console.log("test deleteNode method to delete this.current (head node - node1)");
	expect(testLinkedList.current.subject).toBe("node1")
	testLinkedList.deleteNode();
	console.log("delete node1, move this.current to next node which is node4", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node4");
	expect(testLinkedList.size).toBe(3);
	// [*node4, node2, node3]

	console.log("test deleteNode method to delete this.current (middle node - node2)");
	// navigate from node4 to next node (node2)
	testLinkedList.nextNode();
	// [node4, *node2, node3]
	expect(testLinkedList.current.subject).toBe("node2")
	testLinkedList.deleteNode();
	console.log("delete node2, move this.current to next node which is node3", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node3");
	expect(testLinkedList.size).toBe(2);
	// [node4, *node3]

	console.log("test deleteNode method to delete this.current (tail node - node3)");
	expect(testLinkedList.current.subject).toBe("node3")
	testLinkedList.deleteNode();
	console.log("delete node3, move this.current to prev node which is node4 (b/c next node is null)", testLinkedList);
	expect(testLinkedList.current.subject).toBe("node4");
	expect(testLinkedList.size).toBe(1);
	// [*node4]

	console.log("test deleteNode method to delete this.current (only node - node4)");
	expect(testLinkedList.current.subject).toBe("node4")
	testLinkedList.deleteNode();
	console.log("delete node4, move this.current to null (b/c list is empty)", testLinkedList);
	expect(testLinkedList.current).toBe(null);
	expect(testLinkedList.size).toBe(0);
	// []

	console.log("test totalNodes method on empty linked list");
	expect(testLinkedList.totalNodes()).toBe("error - linked list is empty");

	console.log("test totalNodes method");
	testLinkedList.insertNode("node1", 2);
	testLinkedList.insertNode("node2", 4);
	testLinkedList.insertNode("node3", 6);
	expect(testLinkedList.totalNodes()).toBe(12);
	// [node1 / 1, node2 / 2, *node3 / 3]
});



import Node from "./Node";

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.current = null;
		this.size = 0;
	}

	firstNode() {
		if (this.size > 0) {
			this.current = this.head;
		}
	}

	lastNode() {
		if (this.size > 0) {
			this.current = this.tail;
		}
	}

	nextNode() {
		if (this.size > 0 && this.current.next != null) {
			this.current = this.current.next;
		}
	}

	previousNode() {
		if (this.size > 0 && this.current.prev != null) {
			this.current = this.current.prev;
		}
	}

	insertNode(subject, amount) {
		const node = new Node(subject, amount);

		// evaluates to TRUE if head is null (linked list is empty)
		// head, tail and current are all equal to the new node
		if (this.head === null) {
			this.head = node;
			this.tail = node;
		} 
		// else linked list not empty
		// append new node after current node
		// current is new node
		  else {
		  	node.prev = this.current;

		  	if (this.current.next === null) {
				// node.next is null by default so don't need to assign
				this.current.next = node;
				this.tail = node;
			} else {
				node.next = this.current.next;
				this.current.next.prev = node;
				this.current.next = node;
			} 
		}

		this.current = node;
		this.size ++;
	}

	deleteNode() {
		if (this.head != null) {
			// if delete one and only node reset everything to null
			if (this.size === 1) {
				this.head = null;
				this.tail = null;
				this.current = null;
			} else {
				// if delete tail node
				if (this.current.next === null) {
					this.current.prev.next = null;
					this.tail = this.current.prev;
					this.current = this.current.prev;
				// else if delete head node
				} else if (this.current.prev === null) {
					this.current = this.current.next;
					this.current.prev = null;
					this.head = this.current;
				// else delete a node between two nodes
				} else {
					this.current.prev.next = this.current.next;
					this.current.next.prev = this.current.prev;
					this.current = this.current.next;
				}
			}

			this.size --;
		}
	}

	totalNodes() {
		if (this.head != null) {
			let counter = 0;
			let total = 0;
			let traverser = this.head;

			for (counter = 0 ; counter < this.size ; counter++) {
				total += traverser.amount;
				traverser = traverser.next;
			}
			return total;
		} else {
			return "error - linked list is empty"
		}
	}
}

export default LinkedList;