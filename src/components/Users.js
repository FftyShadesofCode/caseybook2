import React from 'react';

const Users = (props) => {
    return (
        <div className="users-wrapper">
            {props.users.map(user => (
                <div className="user-wrapper">
                    {user.name}
                </div>
            ))}
        </div>
    )
}

export default Users;