// UserList.ts

import React from 'react'

const UserList = ({ users }) => {
    console.log(users)
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.firstName} {user.lastName}
                </li>
            ))}
        </ul>
    )
}

export default UserList
