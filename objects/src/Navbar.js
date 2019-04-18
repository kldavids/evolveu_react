import React from 'react';
import dolphin from './dolphin.png';
import fish from './fish.png';
import frog from './frog.png';
import crab from './crab.png';


const Navbar = (props) => {
  return (
    <div>
      <img src={dolphin} className="App-dolphin" alt="dolphin" onClick={props.handleClick} />
      <img src={fish} className="App-fish" alt="fish" onClick={() => console.log("I was clicked!")}/>
      <img src={frog} className="App-frog" alt="frog" onClick={() => alert("I was clicked!")}/>
      <img src={crab} className="App-crab" alt="crab" onClick={() => console.log("I was clicked!")}/>
    </div>
  );
}

export default Navbar;


// () => console.log("I was clicked!")