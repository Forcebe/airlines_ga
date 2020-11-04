import React, { Component } from 'react';
import '../stylesheets/plane.css';

class Plane extends Component {
  render() {
    return (
      <div>
       <div className="form">
          <div className="grid-col-2">
              <h1 className="title"> Boring Airlines: Planes </h1>
              <button className="btn-primary">Create Plane</button>
           </div>
           <div>
            <form className="grid-col-3">
                <input type="text" placeholder="name" className="form-control row-1 col-1"/>
                <input type="number" placeholder="row" className="form-control row-1 col-2"/>
                <input type="number" placeholder="columns" className="form-control  row-1 col-3"/>
                <input type="submit" value="Cancel" className="btn-primary row-2 col-2"/>
                <input type="submit" value="Save" className="btn-secondary row-2 col-3"/>
            </form>
           </div>
        </div>
     </div>
    );
  }
}
export default Plane;
