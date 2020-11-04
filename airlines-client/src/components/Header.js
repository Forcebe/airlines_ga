import React,{Component} from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../stylesheets/header.css';

import Login from './Login';
import Home from './Home';
import Admin from './Admin';
import Plane from './Plane';
import Flight from './Flight';

class Header extends Component {
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
      'http://localhost:3000/logged_in',
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
            <Route
              exact path='/'
              render={props => (
              <Home {...props} handleLogout={this._handleLogout} loggedInStatus={this.state.isLoggedIn} user={this.state.user} />
            )}
            />

            <Route
             exact path='/login'
             render={props => (
              <Login {...props} handleLogin={this._handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />

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
