import React, {useState} from "react";
import UsersList from "../../components/usersList/UsersList";

function UserPage(props) {
    const [userinfo, setUser] = useState([])

    const getUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(response => response.json())
            .then(data => setUser(data))
    }
    return (
        <div>
            <h1>User list</h1>
            <button onClick={getUser}>get users</button>
            <UsersList userList={userinfo}/>
        </div>
    );
}

export default UserPage;