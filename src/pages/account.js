import { useState, useEffect } from 'react';
import { handleEdit, fetchUser } from '../utils';
// added above once delete is added - handleDelete,
import "../components/style.css";
import Modal from 'react-modal';
import UsernameModal from '../components/usernameModal';

const Account = (props) => {
    const [passwordModal, setPasswordModal] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
//     const [deleteModal, setDeleteModal] = useState(false);
    const [updateKey, setUpdateKey] = useState('');
    const [updateValue, setUpdateValue] = useState('');
    const [checkValue, setCheckValue] = useState('');



const emailHandler = async () => {
        setUpdateKey("email")
        await handleEdit(updateKey, updateValue, props.newUser.id, props.setNewUser)
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
        await handleEdit(updateKey, updateValue, props.newUser.id, props.setNewUser)
        setPasswordModal(false)
}
function noMatch(){
        setPasswordModal(false)
}

    useEffect(() => {
        const user = fetchUser(props.token);
        props.setNewUser(user)
    }, []);

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
                                <UsernameModal newUser={props.newUser} setNewUser={props.setNewUser} />
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
                                                <label className="label" htmlFor="email">CURRENT EMAIL:</label>
                                                        <p id="email" className="email" >{props.newUser.email}</p>
                                                <form onSubmit = {() => emailHandler()}>
                                                        <div className="inputs">
                                                                <label className="label" htmlFor="newEmail">NEW EMAIL:</label>
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
                                                                <label className="label" htmlFor="newPassword">NEW PASSWORD:</label>
                                                                        <input className="newPassword" id="newPassword" onChange= {(e) => setUpdateValue(e.target.value)} required></input>
                                                                <label className="label" htmlFor="repeatPassword">TYPE PASSWORD AGAIN:</label>
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