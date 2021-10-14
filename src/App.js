import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

// Custom components
import Users from './components/Users';
import User from './components/User';
import HomePage from './components/HomePage';
import PostForm from './components/PostForm';

const admin = {
  location: {
    state: "NY"
  },
  login: {
    uuid: "12345"
  },
  picture: {
    medium: "https://wallsdesk.com/wp-content/uploads/2016/12/Thor-High-Quality-Wallpapers.jpg"
  },
  name: {
    first: "CRHarding"
  },
  email: "C@c.com"
}

const post = {
  title: '',
  content: ''
}

function App() {
  const [users, setUsers] = useState([admin]);
  const [formValues, setFormValues] = useState();
  const [posts, setPosts] = useState([post]);

  const change = (evt) => {

  }

  const submit = () => {

  }

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(res => {
        setUsers([...users, ...res.data.results]);
      }).catch(err => console.error(err));
  }, [])

  return (
    <div className="App">
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/users">Friends Page</Link>
          <Link to="/post">Post Something!</Link>
        </nav>
      </header>
      <Route path="/post">
        <PostForm change={change} submit={submit} post={posts[0]} />
      </Route>
      <Route path="/users/:id">
        <User users={users} />
      </Route>
      <Route exact path="/users">
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