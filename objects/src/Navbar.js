import React from 'react';
import dolphin from './dolphin.png';
import fish from './fish.png';
import frog from './frog.png';
import crab from './crab.png';


const Navbar = (props) => {
  return (
    <div>
      <img src={dolphin} className="App-dolphin" alt="dolphin" onClick={props.handleClick} />
      <img src={fish} className="App-fish" alt="fish" onClick={props.handleClick}/>
      <img src={frog} className="App-frog" alt="frog" onClick={props.handleClick}/>
      <img src={crab} className="App-crab" alt="crab" onClick={props.handleClick}/>
    </div>
  );
}

export default Navbar;