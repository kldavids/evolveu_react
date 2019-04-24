import React, { Component } from 'react';
import Navbar from './Navbar';
import MainLogo from './components/MainLogo';
import MathComp from './components/MathComp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={

    }
  }
  handleClick = () => {
    console.log("I was clicked");
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={() => console.log("I was clicked!")}>Hello World</h1>
        <Navbar handleClick={this.handleClick}/>
        <MainLogo />
        <MathComp />
      </div>
    );
  }
}

export default App;
