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
   
    } catch (error) {
       console.log(error)
    }
}

export const loginUser = async (username, password, newUser, setNewUser, loginCookie, setLoginCookie) => {
    console.log(setNewUser)
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
        console.log("Username = ", username)
        console.log("Password = ", password)
        const data = await response.json()
        console.log("Data returned from Back-End - ", data)
        setNewUser(data.user.username)
        writeCookie("jwt_token", data.token, 7, loginCookie, setLoginCookie)  
    } catch (error) {
        console.log(error)
    }
}