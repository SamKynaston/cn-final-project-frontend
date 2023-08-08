import { useState, useEffect } from 'react';
import { handleEdit, handleDelete, fetchUsers } from '../utils'
import "../components/style.css"
import Modal from 'react-modal';
const Account = (props) =>{
    const [user, setUser] = useState([]);
    useEffect (() => {
        fetchUsers(props.newUser.username, setUser);
    }, []);

return (
    <div> 
    <h1 className="opening">Account Details</h1>
            <form onSubmit = {submitHandler}>
            <div className="inputs">
            <div className="left">
                <label className="label">FIRST NAME:{user.forename} </label>
                <label className="label">SURNAME:{user.surname} </label>
            <br></br>
                <label className="label">USERNAME:{user.username} </label>
            <br></br>
            <label className="label">EMAIL:{user.email} </label>
            <br></br>
            <button className='changepassword' onSubmit={() => openPasswordModal}> Change Password </button>
            </div>
            <div className="right">
                <label className="label">LAST NAME:
                    <input className="input" onChange= {(e) => setLastName(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">EMAIL:
                    <input className="input" onChange= {(e) => setEmail(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">TYPE PASSWORD AGAIN:
                    <input className="input" type="password" onChange= {(e) => setPasswordCheck(e.target.value)} required></input>
                </label>
            </div>
            </div>
                <label className="tsandcs">
                   <p> <input type="checkbox" id="checkbox" name="tsandcs" value="Agree"></input>
                    <span className="text">I have read and agree to the <a className="tandc" href="/"> terms & conditions</a> of The Cookie Club.</span></p>
                </label>
            <br></br>
                <button type="submit" className="registerBtn">Click to register</button>
            </form>
          </div>







    // <div>
    // <h1>Account</h1>

    // <button className="accbtn" onClick={() => handleEdit (user.id, user)}>Edit</button>
    // <button className ="accbtn" onClick={() => handleDelete (user.id)}>Delete</button>
    // <ul>
    //     {user.map((user) => (
    //         <li key = {user.id}>
    //             <span>
    //                 Name: {user.name}
    //             </span>
    //             <span>
    //                 Email: {user.email}
    //             </span>
    //             <span>
    //                 Password: {user.password}
    //             </span>
    //         </li>
    //     ))}
    // </ul>
    // </div>
)
}


export default Account;