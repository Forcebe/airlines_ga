import React, { Component } from 'react';

class Login extends Component {
  render() {
    return(
      <div>
        <h1> Log In</h1>
        < LoginForm />
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
  }

  _handleEmail(e) {
    this.setState( { email: e.target.value})

  }

  _handlePassword(e) {
    this.setState( { password: e.target.value})
  }

  render() {
    return (
      <form>
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
