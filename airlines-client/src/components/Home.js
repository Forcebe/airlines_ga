import React from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
import FlightForm from './FlightForm'

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
      {
        props.loggedInStatus ?
        <p>Logged in as {props.user && props.user.name}</p> : null
      }
      {
        props.loggedInStatus ?
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : null
      }
      {
        props.loggedInStatus ?
        <FlightForm /> : null
      }
    </div>
  )
}

export default Home;
