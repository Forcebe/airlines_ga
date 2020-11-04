import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../plane.css';


import Admin from './Admin';
import Flight from './Flight';

class Plane extends Component {
  render() {
    return (
      <div>
       <header>
        <div className="container">
          <Router>
              <nav>
                 <ul>
                  <li><Link to="">Planes</Link></li>
                  <li><Link to="/flight">Flights</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                 </ul>
              </nav>
             <Switch>
                <Route exact path="/flight" component={Flight}/>
                <Route exact path="/admin" component={Admin}/>
             </Switch>
          </Router>
        </div>
       </header>
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
