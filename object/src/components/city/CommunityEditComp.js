import React, { Component } from 'react';

class CommunityEdit extends Component {
	constructor(props){
		super(props);
	}

	handleButtonPopIn = () => {
    const inPopAmt = Number(document.getElementById("inPopAmt").value);
		this.props.cityData.movedInPop(inPopAmt);
		this.props.onChangeAccount();
		this.props.closeEditWindow();
		document.getElementById("inPopAmt").value = "";
  }

  handleButtonPopOut = () => {
    const outPopAmt = Number(document.getElementById("outPopAmt").value);
		this.props.cityData.movedOutPop(outPopAmt);
		this.props.onChangeAccount();
		this.props.closeEditWindow();
    document.getElementById("outPopAmt").value = "";
  }

	render() {
		
		return (
		
			<div className="cityToEdit">
        <h4><strong>City Name: </strong>{this.props.cityData.cityName}</h4>
				<h4><strong>City Id: </strong>{this.props.cityData.cityId}</h4>
        <div className="input-group input-group-lg"> 
          <input id="inPopAmt" type="number" placeholder="Enter amount" />
          <br />
          <button id="movedInPop" className="text-btn" onClick={this.handleButtonPopIn}>People Increase</button>
          <input id="outPopAmt" type="number" placeholder="Enter amount" />
          <br />
          <button id="movedOutPop" className="text-btn" onClick={this.handleButtonPopOut}>People Decrease</button>
				</div> 
			</div>        

		);
	}
}

export default CommunityEdit;