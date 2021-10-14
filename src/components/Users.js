import React from 'react';
import { Link } from 'react-router-dom'

const Users = (props) => {
    return (
        <div className="users-wrapper">
            {props.users.map(user => (
                <div className="user-wrapper" key={user.uuid}>
                    <h2>{user.name.first}</h2>
                    <Link to={`/users/${user.login.uuid}`}>
                        <img src={user.picture.medium} alt={user.name} />
                    </Link>
                    <p>Contact: {user.email}</p>
                    <p>Location: {user.location.state}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;