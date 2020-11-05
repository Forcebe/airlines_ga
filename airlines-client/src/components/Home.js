import axios from 'axios'
import {Link} from 'react-router-dom'
import FlightForm from './FlightForm'
import FlightResults from './FlightResults'

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
