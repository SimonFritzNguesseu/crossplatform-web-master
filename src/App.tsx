import React from 'react'
import './App.css'
import { CreateUser } from './components/CreateUser'
import UserList from './components/UserList/UserList'
import { useGetUsersQuery } from './store/api/usersApi'

function App() {
    const { data: users, refetch } = useGetUsersQuery({})

    return (
        <div className="App">
            <header className="App-header">
                <CreateUser />
                <h3>User List</h3>
                <div className="UserList">
                    <UserList users={users || []} />
                </div>
                <button className="button" onClick={refetch}>
                    Reload
                </button>
            </header>
        </div>
    )
}

export default App
