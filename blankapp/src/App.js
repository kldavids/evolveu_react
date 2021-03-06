import React from 'react';
import logo from './logo.svg';
import Part1Comp from './components/Part1Comp';
import Part2Comp from './components/Part2Comp';
import './App.css';

function App() {
  return (
    <div className="App">
     <h3>I am in control of this application and my name is Kristina</h3>
      <Part1Comp />
      <Part2Comp />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
