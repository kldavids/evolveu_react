import LinkedList from './LinkedList';

test('test LinkedList Class ', () => {

  const linkedListTest = new LinkedList('Node1', 5);
  
  expect(linkedListTest.subject).toBe("Node1");
  expect(linkedListTest.amount).toBe(5);
  
  console.log("Linked List Test", linkedListTest);

  console.log("test show Method");
  console.log(linkedListTest.show());




})
