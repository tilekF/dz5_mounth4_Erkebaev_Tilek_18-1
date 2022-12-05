import React, {useState} from 'react';

function UsersList({userList}) {
    const [users, setUsers] = useState({})
    const getUserInfo = (event) => {
        const id = event.target.dataset.id
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(response => response.json())
            .then(data => {setUsers({
                name:data.name,
                email:data.email,
                website:data.website,
            })
            })
    }
    return (
        <ul>
            <h3>name:{users.name}</h3>
            <h3>email:{users.email}</h3>
            <h3>website:{users.website}</h3>
            {
                userList.map(user =>
                    <li key={user.id}>
                        <p>name: {user.name}</p>
                        <p>email: {user.email}</p>
                        <p>website: {user.website}</p>
                        <button data-id={user.id} onClick={getUserInfo}>get info</button>
                        <p>-------------------------------</p>
                    </li>
                )
            }
        </ul>
    );
}

export default UsersList;