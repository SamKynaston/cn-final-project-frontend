import { useState, useEffect } from 'react';
import { handleEdit, handleDelete, fetchUsers } from '../utils'
const Account = (props) =>{
    const [user, setUser] = useState([]);
    useEffect (() => {
        fetchUsers(props.newUser.username, setUser);
    }, []);

return (
    <div>
    <h1>Account</h1>

    <button className="accbtn" onClick={() => handleEdit (user.id, user)}>Edit</button>
    <button className ="accbtn" onClick={() => handleDelete (user.id)}>Delete</button>
    <ul>
        {user.map((user) => (
            <li key = {user.id}>
                <span>
                    Name: {user.name}
                </span>
                <span>
                    Email: {user.email}
                </span>
                <span>
                    Password: {user.password}
                </span>
            </li>
        ))}
    </ul>
    </div>
)
// }


export default Account;