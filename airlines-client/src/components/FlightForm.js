import React, { Component } from 'react';
import FlightResults from './FlightResults'

class FlightForm extends Component {
  constructor(){
    super();
    this.state = { content: ''};
  }
  _handleChange = () => {
    console.log('a change')
  }
  render () {
    return (
      <div className="section">
        <div className="form">
          <div className="grid-col-1">
            <h1 className="title col-1 row-1"> Flight Search </h1>
          </div>
          <form className="grid-col-2">
              <input type="search" placeholder=" from " required className="form-control row-1 col-1" />
                 <input type="search" placeholder=" to " required className="form-control  row-1 col-2" />
                 <input type="submit" className="btn-primary row-2 col-2"/>
          </form>
          <FlightResults />
        </div>
      </div>
    )
  }
}

export default FlightForm
