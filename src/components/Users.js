import React from 'react';

const Users = (props) => {
    return (
        <div className="users-wrapper">
            {props.users.map(user => (
                <div className="user-wrapper" key={user.uuid}>
                    <h2>{user.name.first}</h2>
                    <img src={user.picture} alt={user.name} />
                    <p>Contact: {user.email}</p>
                    <p>Location: {user.location.state}</p>
                </div>
            ))}
        </div>
    )
}

export default Users;