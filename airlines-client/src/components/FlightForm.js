import React, { Component } from 'react';
import FlightResults from './FlightResults'

class FlightForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      origin: '',
      destination: ''
    };
  }
  _handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  render () {
    const {origin, destination} = this.state

    return (
      <div className="section">
        <div className="form">
          <div className="grid-col-1">
            <h1 className="title col-1 row-1"> Flight Search </h1>
          </div>
          <form className="grid-col-2">
              <input
                placeholder="from"
                type="text"
                name="origin"
                value={origin}
                onChange={this._handleChange}
                className="form-control row-1 col-1"
              />
              <input
                type="search"
                onChange={this._handleChange}
                placeholder=" to "
                name="destination"
                value={destination}
                required
                className="form-control  row-1 col-2"
              />
                 <input type="submit" className="btn-primary row-2 col-2"/>
          </form>
          <FlightResults />
        </div>
      </div>
    )
  }
}

export default FlightForm
