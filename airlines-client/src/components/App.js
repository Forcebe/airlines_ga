import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import Admin from './Admin';
import Plane from './Plane';
import Flight from './Flight';


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
          <h1> Boring Airlines </h1>
          <Router>
              <nav>
                 <ul>
                   <li><Link to="/">Home</Link></li>
                   <li><Link to="/login">Login</Link></li>
                   <li><Link to="/signup">Sign Up</Link></li>
                   <li><Link to="/admin">Admin</Link></li>
                   <li><Link to="/plane">Planes</Link></li>
                   <li><Link to="/flight">Flights</Link></li>
               </ul>
             </nav>
             <Switch>
                <Route
                  exact path="/"
                  render={props => (
                    <Home
                      {...props} handleLogout={this.handleLogout}
                      loggedInStatus={this.state.isLoggedIn}
                      user={this.state.user}
                      />
                    )}
                  />

                <Route
                exact path="/login"
                render={props => (
                  <Login {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                    />
                  )}
                />

                <Route
                  exact path="/signup"
                  render={props => (
                    <Signup {...props}
                      handleLogin={this.handleLogin}
                      loggedInStatus={this.state.isLoggedIn}
                    />
                  )}
                />

                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/plane" component={Plane}/>
                <Route exact path="/flight" component={Flight}/>
             </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
