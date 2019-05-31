import React from 'react';
import CommunityTable from './CommunityTableComp';
import CommunityEdit from './CommunityEditComp';
import Community from './Community';
import './GlobeApp.css';

class GlobeApp extends React.Component {
  constructor (props) {
    super (props);
    this.cityControl = new Community ();
    this.cityControl.addCity("Regina", 50.45, 104.61, 236481);
    this.cityControl.addCity("Calgary", 51.05, 114.07, 1267300);
    this.cityControl.addCity("Garrison", 47.65, 101.41, 1453);
    this.cityControl.addCity("Sidney", -33.87, 151.21, 5230330);


    this.state = {
      cityControl: this.cityControl,
      editId: null
    };
  }
  
  addCityClick = (e) => {
    const newCity = (document.getElementById("newName").value);
    const newLatitude = Number(document.getElementById("newLatitude").value);
    const newLongitude = Number(document.getElementById("newLongitude").value);
    const newPopulation = Number(document.getElementById("newPopulation").value);
		this.cityControl.addCity(newCity, newLatitude, newLongitude, newPopulation);
    this.setState({cityControl: this.cityControl});
    // add following lines to clear input fields between entries
    document.getElementById("newName").value = "";
    document.getElementById("newLatitude").value = "";
    document.getElementById("newLongitude").value = "";
    document.getElementById("newPopulation").value = "";
  }

  remCityClick = (e) => {
    // console.log("what is e", e);
    console.log("e target id", e.target.id);
    console.log("length?", e.target.id.length);
    
    const removeId = Number((e.target.id).slice(3, e.target.id.length));
		this.cityControl.removeCity(removeId);
		this.setState({cityControl: this.cityControl});
  }

  editCityClick = (e) => {
    console.log("edit clicked");
    console.log("e target id", e.target.id);

    const editId = Number((e.target.id).slice(4, e.target.id.length));
    console.log(editId);
		const indexCityList = this.cityControl.cityList.findIndex(item => item.cityId === editId)
    this.setState({editId: indexCityList});
    console.log(indexCityList);
  }

  onChangeAccount = () => {
    this.setState({cityControl: this.cityControl});  
  }

  closeEditWindow = () => {
    this.setState({editId: null})
  }

  render () {
    
    return (
      <div>
        <header>
          <h1>Ocean Colonies</h1>

          <div className="row my-3">
            <div className="col-4 text-center mb-2">
              <h3>Population Total: {this.cityControl.getPopulation()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>City Most Northern: {this.cityControl.getMostNorthern()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>City Most Southern: {this.cityControl.getMostSouthern()}</h3>
            </div>

          </div>
        </header>
     

  
        <div className="createCity">
          <div className="input-group input-group-lg">
            <input type="text" id="newName" placeholder="Enter new City"/>
            <input type="number" id="newLatitude" placeholder="Enter City Latitude "/>
            <input type="number" id="newLongitude" placeholder="Enter City Longitude"/>
            <input type="number" id="newPopulation" placeholder="Enter City Population "/>
            <button className="text-btn" onClick={this.addCityClick}>Add Account</button>
          </div>
        </div>
        <div >
              {this.state.editId !== null 
                ? <CommunityEdit
                  cityData={this.cityControl.cityList[this.state.editId]}
                  editId={this.state.editId}
                  onChangeAccount={this.onChangeAccount}
                  closeEditWindow={this.closeEditWindow}
                /> 
                : ""}
        </div>

        <hr />
        <div>
          <CommunityTable 
            cityData={this.state.cityControl.cityList}
            remCityClick={this.remCityClick}
            editCityClick={this.editCityClick}
          />
        </div>
      </div>

    )
  }





}

export default GlobeApp;