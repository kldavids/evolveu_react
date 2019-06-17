import React from 'react';
import LinkedList from './LinkedList';
import './LinkedList.css';


class LinkedListComp extends React.Component {
  constructor (props) {
    super (props);
    this.linkControl = new LinkedList ();
    this.linkControl.addNode("red", 10);
    this.linkControl.addNode("white", 20);
    this.linkControl.addNode("blue", 30);

    this.listArray =[];  // this is for the FIFO and LIFO exercise.

    this.state = {
      linkControl: this.linkControl,
      listArray: this.listArray
    };
  }

  addNodeClick = (e) => {
    const newSubject = (document.getElementById("newSubject").value);
    const newAmount = Number(document.getElementById("newAmount").value);
    this.linkControl.addNode(newSubject, newAmount);
    this.setState({linkControl: this.linkControl});
    // add following lines to clear input fields between entries
    document.getElementById("newSubject").value = "";
    document.getElementById("newAmount").value = "";
  }

  deleteNodeClick = () => {
    this.linkControl.deleteNode();
    this.setState({linkControl: this.linkControl});
  }

  firstNodeClick = () => {
    this.linkControl.firstNode();
    this.setState({linkControl: this.linkControl});
  }

  lastNodeClick = () => {
    this.linkControl.lastNode();
    this.setState({linkControl: this.linkControl});
  }

  nextNodeClick = () => {
    this.linkControl.nextNode();
    this.setState({linkControl: this.linkControl});
  }

  prevNodeClick = () => {
    this.linkControl.previousNode();
    this.setState({linkControl: this.linkControl});
  }

  arrayAddClick = () => {
    this.listArray.push(document.getElementById("newListInput").value);
    this.setState({listArray: this.listArray});
    document.getElementById("newListInput").value = "";
  }

  firstInClick = () => {
    this.listArray.shift();
    this.setState({listArray: this.listArray});
  }

  lastInClick = () => {
    this.listArray.pop();
    this.setState({listArray: this.listArray});
  }

  render () {
    const listArrayMap = this.listArray.map((item) => 
      <li>{item}</li>
    );

    return (
      <div>
        <header>
          <h1>Inch YOUR way through LinkedList</h1>
          <div className="row my-3">
            <div className="col-4 text-center">
              <h3>Current Node Subject =>  {this.linkControl.showCurrentSubject()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>Current Node Amount =>  {this.linkControl.showCurrentAmount()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>Total Node Amount =>  {this.linkControl.totalAmount()}</h3>
            </div>
          </div>
        </header>
        <hr />
        <div className="createNode">
          <div className="input-group input-group-lg">
            <input type="text" id="newSubject" placeholder="Enter new Subject"/>
            <input type="number" id="newAmount" placeholder="Enter new Amount "/>
            <button className="text-btn" onClick={this.addNodeClick}>Add Node</button>
          </div>
        </div>
        <div className="updateNode">
            <div className="input-group input-group-lg">
              <button className="text-btn" onClick={this.firstNodeClick}>First Node</button>
              <button className="text-btn" onClick={this.lastNodeClick}>Last Node</button>
              <button className="text-btn" onClick={this.nextNodeClick}>Next Node</button>
              <button className="text-btn" onClick={this.prevNodeClick}>Prev Node</button>
            </div>
        </div>
        <div className="removeNode">
            <div className="input-group input-group-lg">
              <button className="text-btn" onClick={this.deleteNodeClick}>Delete Node</button>
            </div>
        </div>

        <hr />
        <h1>  FIFO & LIFO  </h1>
        <div className="stack">
          <div className="input-group input-group-lg">
            <input type="text" id="newListInput" placeholder="Enter new input"/>
            <button className="text-btn" onClick={this.arrayAddClick}>Add to List</button>
            <br/>
            <button className="text-btn" onClick={this.firstInClick}>FIFO</button>
            <button className="text-btn" onClick={this.lastInClick}>LIFO</button>
          </div>
          <ul> {listArrayMap}</ul>
        </div>


      </div>
    )
  }
}

export default LinkedListComp;
