import { useState, useEffect } from 'react';
import { handleEdit, fetchUsers } from '../utils'
// added above once delete is added - handleDelete,
import "./account.css"
import Modal from 'react-modal';

const Account = (props) => {
    const [user, setUser] = useState([]);
    const [passwordModal, setPasswordModal] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const [usernameModal, setUsernameModal] = useState(false);
//     const [deleteModal, setDeleteModal] = useState(false);
    const [updateKey, setUpdateKey] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [checkValue, setCheckValue] = useState('');

const usernameHandler = async () => {
        setUpdateKey("username")
        await handleEdit(updateKey, updateValue, user.id, setUser)
        setUsernameModal(false)
}

const emailHandler = async () => {
        setUpdateKey("email")
        await handleEdit(updateKey, updateValue, user.id, setUser)
        setEmailModal(false)
}

const passwordHandler = () => {
        (updateValue===checkValue)
        ?
        submitPassword()
        :
        noMatch()

}

async function submitPassword(){
        setUpdateKey("password")
        await handleEdit(updateKey, updateValue, user.id, setUser)
        setPasswordModal(false)
}
function noMatch(){
        setPasswordModal(false)
}

    useEffect(() => {
        fetchUsers(props.newUser.username, setUser);
    }, []);

        return (
        <div className="accountPage">
                <h1 className="accountTitle">Account Details</h1>
                <div className="details">
                                <div className="name">
                                        <label className="label" for="firstName">FIRST NAME:</label>
                                                <p id="firstName" class="firstName" readonly>{user.forename}</p>
                                        <label className="label" for="lastName">SURNAME:{user.surname}</label>
                                                <p id="lastName" class="lastName" readonly>{user.surname}</p>
                                </div>
                                <br></br>
                                <div className="usernameEmail">
                                        <label className="label" for="username">USERNAME:</label>
                                                <p id="username" class="username" readonly>{user.username}</p>
                                        <label className="label" for="email">EMAIL:</label>
                                                <p id="email" class="email" readonly>{user.email}</p>
                                </div>
                                <br></br>
                                <div className="modalButtons">
                                <button className='usernameBtn' onSubmit={() => setUsernameModal(true)}> Change Username </button>
                                <Modal
                                isOpen={usernameModal}
                                onRequestClose={() => setUsernameModal(false)}
                                ariaHideApp={false}
                                contentLabel='username'
                                >
                                        <div className="usernameEdit">
                                                <h1 classname="usernameEditTitle">CHANGE USERNAME</h1>
                                                <button className="close" onClick={() => setUsernameModal(false)}>X</button>
                                                <label className="label" for="username">CURRENT USERNAME:</label>
                                                        <p id="username" class="username" readonly>{user.username}</p>
                                                <form onSubmit = {() => usernameHandler()}>
                                                        <div className="inputs">
                                                                <label className="label" for="newUsername">NEW USERNAME:</label>
                                                                        <input className="newUsername" id="newUsername" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                                                        </div>
                                                        <button type="submit" className="submitBtn">Submit</button>
                                                </form>
                                        </div>
                                </Modal>
                                <button className='emailBtn' onSubmit={() => setEmailModal(true)}> Change Email </button>
                                <Modal
                                isOpen={emailModal}
                                onRequestClose={() => setEmailModal(false)}
                                ariaHideApp={false}
                                contentLabel='email'
                                >
                                        <div className="emailEdit">
                                                <h1 classname="emailEditTitle">CHANGE EMAIL</h1>
                                                <button className="close" onClick={() => setEmailModal(false)}>X</button>
                                                <label className="label" for="email">CURRENT EMAIL:</label>
                                                        <p id="email" class="email" readonly>{user.email}</p>
                                                <form onSubmit = {() => emailHandler()}>
                                                        <div className="inputs">
                                                                <label className="label" for="newEmail">NEW EMAIL:</label>
                                                                        <input className="newEmail" id="newEmail" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                                                        </div>
                                                        <button type="submit" className="submitBtn">Submit</button>
                                                </form>
                                        </div>
                                </Modal>
                                <button className='passwordBtn' onSubmit={() => setPasswordModal(true)}> Change Password </button>
                                <Modal
                                isOpen={passwordModal}
                                onRequestClose={() => setPasswordModal(false)}
                                ariaHideApp={false}
                                contentLabel='password'
                                >
                                        <div className="passwordEdit">
                                                <h1 classname="passwordEditTitle">CHANGE PASSWORD</h1>
                                                <button className="close" onClick={() => setPasswordModal(false)}>X</button>
                                                <form onSubmit = {() => passwordHandler()}>
                                                        <div className="inputs">
                                                                <label className="label" for="newPassword">NEW PASSWORD:</label>
                                                                        <input className="newPassword" id="newPassword" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                                                                <label className="label" for="repeatPassword">TYPE PASSWORD AGAIN:</label>
                                                                        <input className="newPassword" id="repeatPassword" onChange= {(e) => setCheckValue(e.target.value)} required></input>
                                                        </div>
                                                        <button type="submit" className="submitBtn">Submit</button>
                                                </form>
                                        </div>
                                </Modal>
                        </div>
                </div>
        </div>

        )

}


export default Account;