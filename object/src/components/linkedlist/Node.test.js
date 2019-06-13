import Node from './Node';

describe('Test the Node Class', function() {
  describe('test to create a new node', () => {
    it ('adds a node', () => {
      let nodeTest = new Node("Red", 10);
      expect(nodeTest).not.toBe(null);
      expect(nodeTest.subject).toBe("Red");
      expect(nodeTest.amount).toBe(10);
      expect(nodeTest.next).toBe(null);
      expect(nodeTest.prev).toBe(null);

      console.log("nodeTest", nodeTest);

      console.log("test show Method");
      console.log(nodeTest.show()); 
    });
  });
});
  





