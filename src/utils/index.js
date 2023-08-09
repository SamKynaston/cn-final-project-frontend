import { writeCookie } from "../common";


export const registerUser = async (firstName, lastName, username, email, password) => {
    
    try {
        const response = await fetch('http://localhost:5001/users/register',
        {method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        mode: "cors",
        body: JSON.stringify({
            "forename": firstName,
            "surname": lastName,
            "username": username,
            "email": email,
            "password": password
            })
        })
    const data = await response.json()
        console.log(data)
    } catch (error) {
       console.log(error)
    }
}

export const loginUser = async (username, password, loginCookie, setLoginCookie) => {
    try {
        const response = await fetch('http://localhost:5001/users/login', {
            method: "POST",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001"},
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
        const info = [{"user": data.user}, {"token": data.token}]
        console.log(info)
        writeCookie("jwt_token", data.token, 7, loginCookie, setLoginCookie)
        return info
    } catch (error) {
        console.log(error)
    }
}

export const fetchUser = async (token) => {
    try {
        const response = await fetch('http://localhost:5001/user/find', {
            method: "GET",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001",
            "Authorization": "Bearer ", token}
        })
        const data = await response.json()
        console.log(data)
        const user = data.user
        return user
    } catch (error) {
        console.error("error fetching user", error);
    }
};

export const handleEdit = async (updateKey, updateValue, userID, setNewUser) => {
    try {
        const response = await fetch('http://localhost:5001/user/edit', {
            method: "PATCH",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001"},
            body: JSON.stringify({
                id: userID,
                updateKey : updateKey,
                updateValue: updateValue
            })
        })
        const data = await response.json()
        setNewUser(data.user);
    } catch (error) {
        console.error("error updating user", error);
    }
}

export const handleDelete = async (userID, setNewUser) => {
    try {
        const response = await fetch('http://localhost:5001/user/delete', {
            method: "DELETE",
            headers: {"Content-Type": "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5001"},
            body: JSON.stringify({
                id: userID
            })
        })
        const data = await response.json()
        console.log(data);
        setNewUser('');
    } catch (error) {
        console.error("error updating user", error);
    }
}