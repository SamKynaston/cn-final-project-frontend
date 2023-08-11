import { useState, useEffect } from 'react';
import { fetchUser } from '../utils';
// added above once delete is added - handleDelete,
import "./account.css";
import UsernameModal from '../components/usernameModal';
import EmailModal from '../components/emailModal';
import PasswordModal from '../components/passwordModal';

const Account = (props) => {
//     const [deleteModal, setDeleteModal] = useState(false);
 
//     useEffect(() => {
//         const user = getUser();
//         props.setNewUser(user)
//     }, []);

//     const getUser = async () => {
//         const user = await fetchUser(props.token, props.newUser.username)
//         console.log("user from getUser = ", user)
//         return user
//     }

        return (
        <div className="accountPage">
                <h1 className="accountTitle">Account Details</h1>
                <div className="details">
                                <div className="name">
                                        <label className="label" htmlFor="firstName">FIRST NAME:</label>
                                                <p id="firstName" className="firstName">{props.newUser.forename}</p>
                                        <label className="label" htmlFor="lastName">SURNAME:</label>
                                                <p id="lastName" className="lastName">{props.newUser.surname}</p>
                                </div>
                                <br></br>
                                <div className="usernameEmail">
                                        <label className="label" htmlFor="username">USERNAME:</label>
                                                <p id="username" className="username" >{props.newUser.username}</p>
                                        <label className="label" htmlFor="email">EMAIL:</label>
                                                <p id="email" className="email" >{props.newUser.email}</p>
                                </div>
                                <br></br>
                                <div className="modalButtons">
                                <UsernameModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                <EmailModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                                <PasswordModal newUser={props.newUser} setNewUser={props.setNewUser} token={props.token} />
                        </div>
                </div>
        </div>

        )

}


export default Account;