import LinkedList from './LinkedList';

describe('Testing the LinkedList class', () => {
  describe('Calling the constructor...', () => {
    let testList = null;
    beforeAll(() => {
      testList = new LinkedList();
    })
    console.log("test constructor", testList);
    it('should create a new LinkedList', () => {
      expect(testList).not.toBe(null);
    })
    it('which should have a length of 0', () => {
      expect(testList.length).toEqual(0);
    })
  })

  describe('Test when list is empty', () => {
    let testList = null;
    beforeAll(() => {
      testList = new LinkedList();
    })
    it('test empty list and empty nodes', () => {
      expect(testList.length).toBe(0);
      expect(testList.head).toBe(null);
      expect(testList.tail).toBe(null);
      expect(testList.currentNode).toBe(null);
      console.log("empty LL", testList);
    })
  })
})

test('test creating a linkedList with add, delete, total ', () => {
  console.log("test addNode method");
  const testList = new LinkedList();
  testList.addNode("red", 10);
  console.log("node1", testList);
  expect(testList.length).toBe(1);
  expect(testList.tail.subject).toBe("red");

  testList.addNode("orange", 20);
  console.log("node2", testList);
  expect(testList.length).toBe(2);
  expect(testList.head.subject).toBe("red");
  expect(testList.tail.subject).toBe("orange");

  testList.addNode("yellow", 30);
  console.log("node3", testList);
  expect(testList.length).toBe(3);
  expect(testList.head.subject).toBe("red");
  expect(testList.tail.subject).toBe("yellow");

  console.log("test to add a new node between Node1 and 2");
  testList.currentNode = testList.head;
  console.log("what node is current?", testList.currentNode);
  testList.addNode("green", 40);
  console.log("node4", testList);
  expect(testList.length).toBe(4);
  expect(testList.head.subject).toBe("red");
  expect(testList.tail.subject).toBe("yellow");

  console.log("what is the totalAmount");
  expect(testList.totalAmount()).toBe(100);

  console.log("test deleteNode method of head node");
  testList.deleteNode("red", 10);
  console.log("remove node1", testList);
  expect(testList.length).toBe(3);
  expect(testList.head.subject).toBe("green");
  expect(testList.tail.subject).toBe("yellow");

  console.log("test deleteNode method of middle node");
  testList.deleteNode("orange", 20);
  console.log("remove node2", testList);
  expect(testList.length).toBe(2);
  expect(testList.head.subject).toBe("green");
  expect(testList.tail.subject).toBe("yellow");

})

