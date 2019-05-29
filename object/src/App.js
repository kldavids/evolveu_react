import React, { Component } from 'react';
import Navbar from './components/Navbar';
import LogoBody from './components/LogoBody';
import MathComp from './components/calculator/MathComp';
import AccountComp from './components//account/AccountComp';
import AccountsApp from './components/account/AccountsApp';
import GlobeApp from './components/city/GlobeApp';


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
        <h5>HOME ---- MATH ---- BASIC ACCOUNT ---- ACCOUNTS ---- COMMUNITY</h5>
        <Navbar handleClick={this.handleClick}/>
        {(this.state.clickName === "math")  ? <MathComp /> : null}
        {(this.state.clickName === "react") ? <LogoBody /> : null}
        {(this.state.clickName === "account") ? <AccountComp /> : null}
        {(this.state.clickName === "accounts") ? <AccountsApp /> : null}
        {(this.state.clickName === "city") ? <GlobeApp /> : null}
      </div>
    );
  }
}

export default App;
