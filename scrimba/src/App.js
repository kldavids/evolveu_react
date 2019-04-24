/*
Let's practice props and mapping components on our todo list app!

I've created a js file with some todos data in it, which I'm imported into this file. 
(Normally this data would come from an API call, not a local file). 

Challenge: Using the array map method, render a child component for each todo 
item in the todosData array and pass the relevant data to it.
*/
/*
In the previous iteration of this todo list app, we pulled in todos data from 
a JSON file and mapped over it to display the todo items.

Eventually we'll want to be able to modify the data, which will only happen if 
we've "loaded" the data in to the component's state

Challenge: Change the <App /> component into a stateful class component and load the 
imported `todosData` into state.
*/
/* -----------------------------------------------------------------------
/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked 
 * (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out 
 * method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls 
 * the `handleChange` method and passes the id of the todo into the function
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			todos: todosData
		}
		this.handleChange = this.handleChange.bind(this)
	}

	// Update state so that the item with the given id flips `completed` from false to true (or vise versa)
	// Remember not to modify prevState directly, but instead to return a new version of 
	// state with the change you want included in that update. (Think how you might use the `.map` method to do this)
	handleChange(id) {
		this.setState(prevState => {
			const updatedTodos = prevState.todos.map(todo => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			});
			return {
				todos: updatedTodos
			}
		})
	}

	render() {
		const todosItem = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
        <div className="todo-list">
		    {todosItem}
        </div>
    );
	}
}

export default App;