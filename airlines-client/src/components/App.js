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
}

export default App;
