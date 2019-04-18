import React from 'react';

function Joke (props) {
  return (
    <div>
      <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
      <h3 style={{color: !props.question && "#00ff00"}}>Answer: {props.punchLine}</h3>
      <hr/>
    </div>
  );

}

export default Joke;

//<h3 style={{display: props.question ? "block" : "none"}}>Question: {props.question}</h3>