import React from 'react';

function TodoItem(props) {
  const completedStyle = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }


  return(
    <div className="todo-item">
      <input 
        type="checkbox" 
        checked={props.item.completed} 
        onChange={() => props.handleChange(props.item.id)} 
      />
      <p style={props.item.completed ? completedStyle : null}>{props.item.text}</p>
    </div>
  );
}

export default TodoItem;

/**
 * Challenge: Get rid of our warning about not having an onChange on our input. 
 * For now, the function that runs onChange can simply console.log something.
 */