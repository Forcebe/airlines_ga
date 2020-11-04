<<<<<<< HEAD
import Flight from './Flight'
=======
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import Plane from './Plane';
import Flight from './Flight';
>>>>>>> c48f11a87201f232f81127b6927c8c63479f8a42

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
        <h1> Test React </h1>
        <Flight />
=======
        <h1> Boring Airlines </h1>
        <Router>
            <nav>
               <ul>
                 <li><Link to="/">Home</Link></li>
                 <li><Link to="/login">Login</Link></li>
                 <li><Link to="/admin">Admin</Link></li>
                 <li><Link to="/plane">Planes</Link></li>
                 <li><Link to="/flight">Flights</Link></li>
             </ul>
           </nav>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/admin" component={Admin}/>
              <Route exact path="/plane" component={Plane}/>
              <Route exact path="/flight" component={Flight}/>
           </Switch>
        </Router>
>>>>>>> c48f11a87201f232f81127b6927c8c63479f8a42
    </div>
  );
}

export default App;
