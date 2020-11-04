<<<<<<< HEAD

import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import Plane from './Plane';
import Flight from './Flight';


function App() {
  return (
    <div className="App">

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
    </div>
  );
=======
import React, { Component } from 'react';
import axios from 'axios'
import '../stylesheets/main.css';
import Header from './Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount () {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get (
      'http://localhost3000/logged_in',
      {withCredentials: true}
    )
    .then(response => {
      if (response.data.logged_in) {
        this._handleLogin(response)
      } else {
        this._handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  _handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  _handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
  }


  render() {
    return (
      <div className="App">
        < Header/>
      </div>
    );
  }
>>>>>>> 18e28ffb911ee11034b3e3f1a48253d973fea23d
}

export default App;
