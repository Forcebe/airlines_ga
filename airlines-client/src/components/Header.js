import React,{Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../stylesheets/header.css';

import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import Plane from './Plane';
import Flight from './Flight';

class Header extends Component {
  render(){
    return(
     <Router>
      <div>
        <header>
          <div className="container">
            <nav>
              <h1 className="logo"> Boring Airlines </h1>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/login">Login</Link></li>
                  <li><Link to="/admin">Admin</Link></li>
                  <li><Link to="/plane">Planes</Link></li>
                  <li><Link to="/flight">Flights</Link></li>
                </ul>
             </nav>
           </div>
          </header>
          <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/login" component={Login}/>
             <Route exact path="/admin" component={Admin}/>
             <Route exact path="/plane" component={Plane}/>
             <Route exact path="/flight" component={Flight}/>
          </Switch>
      </div>
     </Router>
    );
  }
}
export default Header;
