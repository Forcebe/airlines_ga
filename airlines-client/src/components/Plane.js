import React, { Component } from 'react';
import '../stylesheets/plane.css';

class Planes extends Component {
  render() {
    return (
      <div className="section">
        <div className="form-planes">
          <div className="grid-col-3">
              <h1 className="title col-1"> Aeroplanes </h1>
              <button className="btn-primary col-3 h45">Create Plane</button>
           </div>
           <div>
            <form onSubmit={ this._handleSubmit } className="grid-col-3">
                <input onChange={ this._handleChange } type="text" placeholder="name" className="form-control row-1 col-1"/>
                <input type="number" placeholder="row" className="form-control row-1 col-2"/>
                <input type="number" placeholder="columns" className="form-control  row-1 col-3"/>
                <input type="submit" value="Cancel" className="btn-primary row-2 col-2"/>
                <input type="submit" value="Save" className="btn-primary row-2 col-3"/>
            </form>
           </div>
        </div>
     </div>
    );
  }
}

export default Planes;
