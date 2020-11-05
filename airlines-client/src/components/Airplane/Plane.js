import React, { Component } from 'react';
import PlanesForm from './PlanesForm.js';

class Planes extends Component {
  constructor(){
    super();
    this.state = {
      airplanes: []
    }
  }

  savePlane() {
  }

  render() {
    return(
      <div>
      <PlanesForm onSubmit={ this.savePlane } />
      <PlanesList airplanes={this.state.airplanes}/>
      </div>
    );
  }
}

// No this in functional component
const PlanesList = (props) => {
  return (
    <div className="section">
      <div className="form">
       <h2>******* Seating Diagram Coming Soon *******</h2>
      </div>
    </div>
  );
}

export default Planes;
