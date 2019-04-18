import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {
  constructor() {
    super();
    this.state={}
  }
  handleClick = () => {
    console.log("I was clicked");
  }

  render() {
    return (
      <div className="App">
        <h1 onClick={() => console.log("I was clicked!")}>Hello World</h1>
        <Navbar handleClick={this.handleClick}/>
        <Main />
      </div>
    );
  }
}

export default App;
