import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

// Custom components
import Users from './components/Users';
import HomePage from './components/HomePage';

const admin = {
    location: 'NY',
    uuid: '1cdcd44d-44cd-43cb-b59f-13d3f4468b5e',
    picture: 'https://media.gq.com/photos/588913c08d52a3d07dbac878/64:25/w_2469,h_964,c_limit/0217-GQ-FEJO02-01-Prostitution-Therapy-02.jpg',
    name: 'Imma D. Sucker',
    email: 'ana.perrin@example.com',
}
function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://randomuser.me/api/')
            .then(res => {
                console.log(res.data.results);
            }).catch(err => console.error(err));
    }, [])
    return (
        <div className='App'>
            <header>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/users'>Bitches N' Hoes</Link>
                    <Link to='/'>DON'T FUCKIN' CLICK ME!</Link>
                </nav>
            </header>
            <Route path='/users'>
                <Users users={users} />
            </Route>
            <Route path='/'>
                <HomePage />
            </Route>
        </div>
    );
}

export default App