import React from 'react';
import math from './math';

class MathComp extends React.Component {
  constructor() {
    super();
    this.state = {
      result: ""
    }
  }
// method to handle all click events from the math operators
  handleMath = (e) => {
    // console.log("in handleMath");
    const operator = e.target.getAttribute("operator");
    // console.log("op is",operator);
    // console.log("target is", e.target);
    const a = Number(document.getElementById("input1").value);
    const b = Number(document.getElementById("input2").value);


    switch(operator) {
      case 'Add':
        this.setState({result: math.sum (a, b)});
        break;

      case 'Sub':
        this.setState({result: math.sub (a, b)});
        break;

      case 'Multiply':
        this.setState({result: math.multiply (a, b)});
        break;

      case 'Divide':
        this.setState({result: math.divide (a, b)});
        break;

      case 'Clear':
        this.setState({result: 0});
        document.getElementById("input1").value="";
        document.getElementById("input2").value="";
        break;

      default:
        console.log("End")
    }
  }

  render(){
    return (
      <div className="math-container">
        <h2>My Simple Calculator</h2>
        Enter number:<input id="input1" type="number"/>
        Enter number:<input id="input2" type="number"/>
        <hr></hr>
        <button operator="Add" onClick={this.handleMath}>+</button>
        <button operator="Sub" onClick={this.handleMath}>-</button>
        <button operator="Multiply" onClick={this.handleMath}>*</button>
        <button operator="Divide" onClick={this.handleMath}>/</button>
        <button operator="Clear" onClick={this.handleMath}>Clear</button>
        <hr></hr>
        <p>Result: {this.state.result}</p>
      </div>
    );
  }
}
export default MathComp; 