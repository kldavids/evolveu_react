import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LogoBody from './components/LogoBody';
import MathComp from './components/MathComp';
import AccountComp from './components/AccountComp';
import Accounts from './components/Accounts';
import City from './components/City';

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
        <h1>Kristina's Life in the Water</h1>
        <h3>HOME --- MATH --- BASIC ACCOUNT --- ACCOUNTS --- COMMUNITY</h3>
        <Navbar handleClick={this.handleClick}/>
        {(this.state.clickName === "math")  ? <MathComp /> : null}
        {(this.state.clickName === "react") ? <LogoBody /> : null}
        {(this.state.clickName === "account") ? <AccountComp /> : null}
        {(this.state.clickName === "accounts") ? <Accounts /> : null}
        {(this.state.clickName === "city") ? <City /> : null}
        
      </div>
    );
  }
}

export default App;
