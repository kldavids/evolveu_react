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

test('creating a linkedList with add, delete, pointers, total ', () => {

  console.log("test addNode method along with first, last, next, previous");
  const testList = new LinkedList();
  testList.addNode("red", 10);
  expect(testList.length).toBe(1);
  expect(testList.firstNode()).toEqual("red");
  expect(testList.lastNode()).toEqual("red");
  console.log("1st node", testList);

  testList.addNode("orange", 20);
  expect(testList.length).toBe(2);
  expect(testList.firstNode()).toEqual("red");
  expect(testList.lastNode()).toEqual("orange");
  console.log("2nd node", testList);

  testList.addNode("yellow", 30);
  expect(testList.length).toBe(3);
  expect(testList.firstNode()).toEqual("red");
  expect(testList.lastNode()).toEqual("yellow");
  console.log("3rd node", testList);

  testList.addNode("green", 40);
  expect(testList.length).toBe(4);
  expect(testList.firstNode()).toEqual("red");
  expect(testList.lastNode()).toEqual("green");
  console.log("4th node", testList);



  console.log("verify nextNode & previousNode pointer functionality");
  expect(testList.currentNode.subject).toEqual("green");
  testList.previousNode();
  expect(testList.currentNode.subject).toEqual("yellow");
  console.log(testList);
  testList.previousNode();
  expect(testList.currentNode.subject).toEqual("orange");
  console.log(testList);
  testList.nextNode();
  testList.nextNode();
  expect(testList.currentNode.subject).toEqual("green");
  console.log(testList);

  console.log("what is the totalAmount");
  expect(testList.totalAmount()).toBe(100);

  console.log("check delete method");
  expect(testList.currentNode.subject).toEqual("green");
  console.log("delete current node/tail node");
  testList.deleteNode();
  console.log(testList);
  testList.previousNode();
  testList.previousNode();
  expect(testList.currentNode.subject).toEqual("red");
  console.log("delete head node");
  testList.deleteNode();
  console.log(testList);

  testList.addNode("blue", 50);
  expect(testList.length).toBe(3);
  expect(testList.currentNode.subject).toEqual("blue");
  console.log("5th node", testList);

})

