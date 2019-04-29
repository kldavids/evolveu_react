import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LogoBody from './components/LogoBody';
import MathComp from './components/MathComp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      clickName: "react"
    }
  }

  handleClick = (e) => {
    this.setState({clickName: e.target.name})
    }
  

  render() {
    return (
      <div className="App">
        <h1>Kristina's Desk</h1>
        <Navbar handleClick={this.handleClick}/>
        {(this.state.clickName === "math")  ? <MathComp /> : null}
        {(this.state.clickName === "react") ? <LogoBody /> : null}
        
        
      </div>
    );
  }
}

export default App;
