import React from 'react';
<<<<<<< HEAD
import axios from 'axios'
import {Link} from 'react-router-dom'
import FlightForm from './FlightForm'
import FlightResults from './FlightResults'
=======
import axios from 'axios';
import {Link} from 'react-router-dom';
>>>>>>> d338b261d5e0ed78408dfe325ad29cf3f26f65cd

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
      <h1>Flight Search</h1>
      {
        props.loggedInStatus ?
        <p>Logged in as {props.user && props.user.name}</p> : null
      }
      {
        props.loggedInStatus ?
        <Link to='/logout' onClick={handleClick}>Log Out</Link> : null
      }

      <FlightForm />
      <FlightResults />

    </div>
  )
}

export default Home;
