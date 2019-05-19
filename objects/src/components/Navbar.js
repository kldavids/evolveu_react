import React from 'react';
import dolphin from '../images/dolphin.png';
import fish from '../images/fish.png';
import frog from '../images/frog.png';
import crab from '../images/crab.png';
import homeicon from '../images/homeicon.png';


const Navbar = (props) => {
  return (
    <div >
      <img src={homeicon} className="App-home" alt="home" name="react" onClick={props.handleClick}/>
      <img src={dolphin} className="App-dolphin" alt="dolphin" name="math" onClick={props.handleClick} />
      <img src={fish} className="App-fish" alt="fish" name="account" onClick={props.handleClick}/>
      <img src={frog} className="App-frog" alt="frog" name="accounts" onClick={props.handleClick}/>
      <img src={crab} className="App-crab" alt="crab" name="city" onClick={props.handleClick}/>
    </div>
  );
}

export default Navbar;