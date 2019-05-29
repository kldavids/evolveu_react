import React from 'react';
// import CommunityTable from './CommunityTableComp';
import Community from './Community';
import './GlobeApp.css';

class GlobeApp extends React.Component {
  constructor (props) {
    super (props);
    this.cityControl = new Community ();
    this.cityControl.addCity("Regina", 50.45, 104.61, 236481);

    this.state = {
      cityControl: this.cityControl,
      editId: null
    };
  }

  render () {
    return (
      <div>
        <header>
          <h1>Ocean Colonies</h1>

          <div className="row my-3">
            <div className="col-4 text-center mb-2">
              <h3>Accounts Total: ${this.cityControl.totalAccounts()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>Max Account: ${this.cityControl.maxAccount()}</h3>
            </div>
            <div className="col-4 text-center">
              <h3>Min Account: ${this.cityControl.minAccount()}</h3>
            </div>

          </div>
        </header>
      </div>

    )
  }





}

export default GlobeApp;