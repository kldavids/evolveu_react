import React from 'react';
import NextLevelComp from './NextLevelComp';

class Part1Comp extends React.Component {
  constructor(props){
    super();
    this.state = {
      count: 0,
    }
  }

  onHandleClick = () => {
   console.log("b4 setState", this.state.count);
   this.setState({count: this.state.count + 1})
   console.log("After setState ", this.state.count);
  }

  onIncrementClick = () => {
    this.setState({count: this.state.count + 1})
    console.log("OnIncrementClick ", this.state.count);
   }

  render(){
    return(
      <div>
        <h1>Hello from Part1Comp</h1>
        <p>I am {this.state.count} years old forever!</p>
        <button onClick={this.onHandleClick}>Push Me</button>
        <NextLevelComp msg="Hello from Part1Comp" onIncrement={this.onIncrementClick}/>
      </div>
    );
  }
}

export default Part1Comp;