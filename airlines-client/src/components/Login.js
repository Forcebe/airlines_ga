import React, { Component } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/login.json'

class Login extends Component {
  constructor () {
    super();
    this.state = {
      currentUser: ''
    }
    this.submitLogin = this.submitLogin.bind(this);

  }

  submitLogin(state) {
    console.log(`submitting login ${state.email} ${state.password}`)
  }

  render() {
    return(
      <div>
        <h1> Log In</h1>
        < LoginForm onSubmit={ this.submitLogin } />
      </div>
    )
  }
}

class LoginForm extends Component {
  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    }
    this._handleEmail = this._handleEmail.bind(this)
    this._handlePassword = this._handlePassword.bind(this)
    this._handleSubmit = this._handleSubmit.bind(this)
  }
    // These handlers update the state with email and password
  _handleEmail(e) {
    this.setState( { email: e.target.value})

  }
  _handlePassword(e) {
    this.setState( { password: e.target.value})
  }
    //this handles submiting the data to the server
  _handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit( this.state)
  }

  render() {
    return (
      <form onSubmit = { this._handleSubmit }>
        <label>Email</label>
        <input
            onChange={this._handleEmail}
            autoFocus
            type="email"
          />
          <label>Password</label>
          <input
            onChange={this._handlePassword}
            type="password"
          />
        <input type="submit" value="Login" />
      </form>
    )
  }
}

export default Login;
