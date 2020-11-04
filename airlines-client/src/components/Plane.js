import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Admin from './Admin';
import Flight from './Flight';

class Plane extends Component {
  render() {
    return (
      <div className="container">
          <h1> Planes </h1>
          <button>Create Plane</button>
          <div className="create-plane"> </div>
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
    );
  }
}
export default Plane;
