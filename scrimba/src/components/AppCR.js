import React from "react";

/*
Challenge:
Given a stateless functional component:
1. Follow the steps necessary to add state to it,
2. Have state keep track of whether the user is logged in or not
3. Add a button that logs the user in/out
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    }
  this.handleClick=this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLoggedIn: !prevState.isLoggedIn
      }
    });
  }

  render(){
    let btnText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"

    let wordDisplay = this.state.isLoggedIn ? "IN" : "OUT"
// we can use the below or above method to figure out wordDisplay
    // if (this.state.isLoggedIn) {
    //   wordDisplay = "IN";
    // } else {
    //   wordDisplay = "OUT";
    // }
    return (
       <div>
        <h1>You are currently logged {wordDisplay} </h1>
        <button onClick ={this.handleClick}>{btnText}</button>
      </div>
    );
  }
}

  
export default App;


















// import React, {Component} from "react";
// import Conditional from "./Conditional";

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       isLoading: true
//     }
//   }
//     componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       })
//     }, 2500)
//   }
    
//   render() {
//     return (
//       <div>
//         {this.state.isLoading ?
//         <h1>Loading...</h1> :
//         <Conditional />}
//       </div>
//     );
//   }
// }

// export default App;
