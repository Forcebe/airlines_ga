import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import '../stylesheets/login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: ''
     };
  }
  componentDidMount() {
    return this.props.loggedInStatus ? this.redirect() : null
  }

  // These handlers update the state with email and password
  _handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
  //this handles submiting the data to the server
  _handleSubmit = (event) => {
    event.preventDefault()
    const {email, password} = this.state

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
          })
        }
        </ul>
      </div>
    )
  }

  render() {
    const {email, password} = this.state

    return (
      <div className="section">
        <form onSubmit = { this._handleSubmit } className="form-login">
          <h1 className="margin-20"> Login </h1>
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this._handleChange}
            className="form-control margin-20"
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            onChange={this._handleChange}
            value={password}
            className="form-control margin-20"
          />
            <input type="submit" value="Log In" className="btn-primary margin-20"/>

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
