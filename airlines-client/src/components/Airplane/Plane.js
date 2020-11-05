import React, { Component } from 'react';
import axios from 'axios';
import PlanesForm from './PlanesForm.js';

const ALL_PLANES_URL = 'http://localhost:3000/airplanes.json';

class Planes extends Component {
  constructor(){
    super();
    this.state = {
      airplanes: []
    }
     this.savePlane = this.savePlane.bind(this);
      const fetchPlanes = () => {
        axios.get(ALL_PLANES_URL).then((results) => {
          this.setState({airplanes: results.data});
          setTimeout(fetchPlanes, 6000);
        });
      };
      fetchPlanes();
    }

    savePlane(content) {
      axios.post(ALL_PLANES_URL, {content: content}).then((result) => {
        this.setState({airplanes: [...this.state.airplanes, result.data]});
      });
    }
    render() {
      return(
        <div>
           <PlanesForm onSubmit={ this.savePlane } />
           <PlaneDetails airplanes={this.state.airplanes}/>
        </div>
      );
    }
  }

// onChange display New plane name
// onChange display grid (rows, cols)
const PlaneDetails = (props) => {
  const plane = props.airplanes[0];
  console.log(plane);
  return (
    <div className="section-2">
      <div className="form">
       <h2>******* Seating Diagram Coming Soon *******</h2>
      </div>
    </div>
  );
}

export default Planes;
