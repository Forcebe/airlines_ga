import React, { Component } from 'react';
import Airplanes from './Airplanes';

class Navigation extends Component {
  render() {
    return(
      <div>
        <nav>
          <ul>
           <li><a href="#">Planes</a></li>
           <li><a href="#">Flights</a></li>
           <li><a href="#">Admin</a></li>
          </ul>
      </nav>
      </div>
    )
  }
}
export default Navigation;
