import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
    this.handleClick=this.handleClick.bind(this);
  }

  handleClick () {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }
  
  render () {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick = {this.handleClick}>Change Count</button>
      </div>
    )

  }
} 
export default App;

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state = {
//       isLoggedIn: true
//     }
//   }

//   render() {
//     let wordDisplay;
//     if (this.state.isLoggedIn) {
//       wordDisplay = "IN";
//     } else {
//       wordDisplay = "OUT";
//     }
//     return (
//        <div>
//         <h1>You are currently logged {wordDisplay} </h1>
//       </div>
//     );
//   }
// }

// export default App;

// Challenge:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

// import React from "react";

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "Joe",
//       age: 37
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h3>{this.state.age} years old</h3>
//       </div>
//     );
//   }  
// }

// export default App;