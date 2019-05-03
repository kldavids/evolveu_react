import React from 'react';

class NextLevelComp extends React.Component {
    constructor(props){
      console.log("inside NextLevelComp", props);
    super();
  }

  render(){
    return(
      <div>
        <h5>Hello from NextLevelComp</h5>
        <button onClick={this.props.onIncrement}>Increment</button>
      </div>
    );
  }
}

export default NextLevelComp;