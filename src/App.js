import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

// Custom components
import Users from './components/Users';
import HomePage from './components/HomePage';

const admin = {
  location: {
    state: "NY"
  },
  uuid: "12345",
  picture: {
    medium: "https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg"
  },
  name: {
    first: "CRHarding"
  },
  email: "C@c.com"
}

function App() {
  const [users, setUsers] = useState([admin]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(res => {
        console.log(res.data.results);
        setUsers([...users, ...res.data.results]);
      }).catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Friends Page</Link>
        </nav>
      </header>
      <Route path="/users">
        <Users users={users} />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </div>
  );
}

export default App;


/**
 * user.location -> state
 * user.uuid
 * user.picture.medium
 * user.name -> user.first + user.last
 * user.posts -> stretch -> likes
 * user.email
 */