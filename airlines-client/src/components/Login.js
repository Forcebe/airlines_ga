import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: '',
    };
  }

  // These handlers update the state with email and password
  _handleChange = (e) => {
    const {name, value} =e.target
    this.setState( { [name]: value})
  };
  //this handles submiting the data to the server
  _handleSubmit = (e) => {
    e.preventDefault()
    const {name, email, password} = this.state

    let user = {
      email: email,
      password: password,
    }

    axios.post('http://localhost:3000/login', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.logged_in) {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };

    redirect = () => {
      this.props.history.push('/')
    }

    handleErrors = () => {
      return (
        <div>
          <ul>
            {this.state.errors.map(error => {
              return <li key={error}>{error}</li>
            })}
          </ul>
        </div>
      )
    }

  render() {
    const {name, email, password} = this.state

    return (
      <div>
      <form onSubmit = { this._handleSubmit }>
        <label>Email</label>
        <input
            autoFocus
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={this._handleChange}
          />
        <input type="submit" value="Log In" />

        <div>
            or <Link to='/signup'>sign up</Link>
          </div>
      </form>
      <div>
        {
          this.state.errors ? this.handleErrors() : null
        }
      </div>
      </div>
    )

  }
}


export default Login;
