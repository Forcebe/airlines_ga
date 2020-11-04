import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import Plane from './Plane';

function App() {
  return (
    <div className="App">
        <h1> Boring Airlines </h1>
        <Router>
            <nav>
             <Link to="/">Home</Link>
             <Link to="/login">Login</Link>
             <Link to="/admin">Admin</Link>
             <Link to="/plane">Planes</Link>
           </nav>
           <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <Route exact path="/admin" component={Admin}/>
              <Route exact path="/plane" component={Plane}/>
           </Switch>
        </Router>
    </div>
  );
}

export default App;
