import React from 'react';
import logo from '../images/logo.svg';

function LogoBody() {
  return(
    <main className="App-main">
      <img src={logo} className="App-logo" alt="logo" id="home"/>
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
    </main>
  );
}  

export default LogoBody;