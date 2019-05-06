import React from 'react';
import math from './math';
import multiplyicon from '../images/multiplyicon.png';
import divideicon from '../images/divideicon.png';
import addicon from '../images/addicon.png';
import subicon from '../images/subicon.png';
import eraser from '../images/eraser.png';

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

console.log("case?", operator);
console.log(a);
console.log(b);
console.log(this.state.result);


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
        alert("Unknown math operation");
    }
  }

  render(){
    return (
      <div className="math-container">
        <h2>My Simple Calculator</h2>
        <input id="input1" type="number" placeholder="Enter Number"/>
        <input id="input2" type="number" placeholder="Enter Number"/>
        <hr></hr>
        <button className="icon-btn" >
          <img  operator="Add" onClick={this.handleMath} className="icon-img" src={addicon} alt="addicon" />
        </button>

        <button className="icon-btn" >
          <img  operator="Sub" onClick={this.handleMath} className="icon-img" src={subicon} alt="subicon" />
        </button>

        <button className="icon-btn" >
          <img  operator="Divide" onClick={this.handleMath} className="icon-img" src={divideicon} alt="divideicon" />
        </button>
        
        <button className="icon-btn" >
          <img  operator="Multiply" onClick={this.handleMath} className="icon-img" src={multiplyicon} alt="multiplyicon" />
        </button>
        
        <button className="icon-btn" >
          <img operator="Clear" onClick={this.handleMath} className="icon-img" src={eraser} alt="eraser" />
        </button>
        <hr></hr>
        <h2>Result: {this.state.result}</h2>
      </div>
    );
  }
}
export default MathComp; 
