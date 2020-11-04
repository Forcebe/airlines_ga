import React, { Component } from 'react';
import axios from 'axios'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const { email, name, password, password_confirmation} = this.state

    let user = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }

    axios.post('http://localhost:3000/users', {user}, {withCredentials: true})
    .then(response => {
      if (response.data.status === 'created') {
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
          <ul>{this.state.errors.map((error) => {
            return <li key={error}>{error}</li>
          })}
          </ul>
        </div>
      )
    }

render() {
    const {name, email, password, password_confirmation} = this.state

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

          <label>Name</label>
          <input
              type="text"
              value={name}
              onChange={this.handleChange}
            />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={this._handleChange}
          />

          <label>Confirm password</label>
          <input
            type="password"
            value={password_confirmation}
            onChange={this._handleChange}
          />
        <input type="submit" value="Sign Up" />
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


export default Signup;
