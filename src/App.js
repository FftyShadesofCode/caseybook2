import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=5')
      .then(res => {
        console.log(res);
      }).catch(err => console.error(err));
  }, [])
  return (
    <div className="App">
      <h1>CaseyBook</h1>
      <h2>It's like facebook, only made by some guy called Casey</h2>
      <p>Coming soon!</p>
    </div>
  );
}

export default App;
