import {useState, useEffect} from 'react';
import Allcookies from '../components/allCookies';

const Account = () =>{
    const [users, setUsers] = useState([]);
    useEffect (() => {
        fetchUsers ();
    }, []);
    const fetchUsers = async () => {
        try {
            const response = await Allcookies.get("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR");
            setUsers (response.data);
        } catch (error) {
            console.error("error fetching user", error);
        }
    };

    const handleEdit = async (id, updatedUser) => {
        try {
            await Allcookies.put("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR");
            fetchUsers()
        } catch (error) {
            console.error("error updating user", error);
        }
    }

    const handleDelete = async (id) => {
        try {
            await Allcookies.delete("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR");
            fetchUsers()
        } catch (error) {
            console.error("error deleting user", error);
        }
    }

    


return (
    <div>
    <h1>Account</h1>

    <button className="accbtn" onClick={() => handleEdit (users.id, users)}>Edit</button>
    <button className ="accbtn" onClick={() => handleDelete (users.id)}>Delete</button>
    <ul>
        {users.map((users) => (
            <li key = {users.id}>
                <span>
                    Name: {users.name}
                </span>
                <span>
                    Email: {users.email}
                </span>
                <span>
                    Password: {users.password}
                </span>
            </li>
        ))}
    </ul>
    </div>
)
}


export default Account;