import { useState, useEffect } from 'react';
import Allcookies from '../components/allCookies';

// receives prop.loginToken to determine whether to show page.


const Account = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        try {
            const response = await Allcookies.get("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR");
            setUsers(response.data);
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
        <div className="accountContainer">
        <button className="close" onClick={closeModal}>X</button>
          <h1>Please login:</h1>
          <form onSubmit={submitHandler}>
              <div className="inputs left">
              <label className="loginLabel">USERNAME:
                  <input className="loginInput" onChange= {(e) => setUsername(e.target.value)}></input>
              </label>
          <br></br>
              <label className="loginLabel">PASSWORD:
                  <input type="password" className="loginInput" onChange= {(e) => setPassword(e.target.value)}></input>
              </label>
              </div>
          <br></br>
              <button className="loginBtn" type="submit">LOGIN</button>
          </form>
      </div>


















//     <>
// <div>
//     <h1>Account</h1>
// {/* 
//     <button className="accbtn" onClick={() => handleEdit (user.id, user)}>Edit</button>
//     <button className ="accbtn" onClick={() => handleDelete (user.id)}>Delete</button>
//     <ul>
//         {users.map((user) => (
//             <li key = {user.id}>
//                 <span>
//                    {/* forename
//                    surname
//                    username
//                    password */}
//                     Name: {user.name}
//                 </span>
//                 <span>
//                     Email: {user.email}
//                 </span>
//                 <span>
//                     Password: {user.password}
//                 </span>
//             </li>
//         ))}
//     </ul>
//     </div>



//     </> */}

)
// }


export default Account;