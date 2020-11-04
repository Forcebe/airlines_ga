import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

const Home = (props) => {
  const handleClick = () => {
    axios.delete('http://localhost:3000/logout', {withCredentials: true})
    .then(response => {
      props.handleLogout()
      props.history.push('/')
    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      <h1>Home Page</h1>
      {
        props.loggedInStatus ?
        <p>Logged in as {props.user}</p> : null
      }
      {
        props.loggedInStatus ?
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : null
      }
    </div>
  )
}

export default Home;
