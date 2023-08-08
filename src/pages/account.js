import { useState, useEffect } from 'react';
import { handleEdit, handleDelete, fetchUsers } from '../utils'
import "../components/style.css"
import Modal from 'react-modal';
const Account = (props) =>{
    const [user, setUser] = useState([]);
    const [passwordModal, setPasswordModal] = useState(false);
    const [emailModal, setEmailModal] = useState(false);
    const [usernameModal, setUsernameModal] = useState(false);

    useEffect (() => {
        fetchUsers(props.newUser.username, setUser);
    }, []);

function openPasswordModal(){
    setPasswordModal(true)
}
function openEditModal(fieldToEdit){
    (fieldToEdit == email)?
    setEmailModal(true):
    setUsernameModal(true)
}


return (
    <div> 
    <h1 className="opening">Account Details</h1>
            <div className="inputs">
            <div className="left">
                <label className="label">FIRST NAME:{user.forename} </label>
                <label className="label">SURNAME:{user.surname} </label>
            <br></br>
                <label className="label">USERNAME:{user.username} </label>
                <button className='' onSubmit={() => openEditModal(username)}> Change Username </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    ariaHideApp={false}
                    contentLabel=''
                    >
                    <div className="recipeContainer">
                        <button className="close" onClick={() => setModalIsOpen(false)}>X</button>
                        <h1 className="recipeTitle">{props.cookie.cookieName}</h1>
                        <div className="ingreds">{ingreds}</div>
                        <div className="site">
                        <iframe className="embed" title={props.cookie.id} src={props.cookie.cookieUrl} width="800" height="500"></iframe>
                        </div>
                    </div>
                </Modal>
                <label className="label">EMAIL:{user.email} </label>
                <button className='changeEmail' onSubmit={() => emailModal(true)}> Change Email </button>
                <Modal
                    isOpen={emailModal}
                    onRequestClose={() => setEmailModal(false)}
                    ariaHideApp={false}
                    contentLabel='Email'
                    >
                    <div className="emailContainer">
                        <button className="close" onClick={() => setEmailModal(false)}>X</button>
                        <div className="emailInModal">EMAIL:{user.email} </div>
                        <div className="editEmailField">
                            <label className="label">NEW EMAIL:
                                <input className="input" required></input>
                                <button onSubmit={} >Submit</button>
                            </label>
                        </div>
                    </div>
                </Modal>
            <br></br>
                <button className='changepassword' onSubmit={() => openPasswordModal}> Change Password </button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    ariaHideApp={false}
                    contentLabel='Recipe'
                    >
                    <div className="recipeContainer">
                        <button className="close" onClick={() => setModalIsOpen(false)}>X</button>
                        <h1 className="recipeTitle">{props.cookie.cookieName}</h1>
                        <div className="ingreds">{ingreds}</div>
                        <div className="site">
                        <iframe className="embed" title={props.cookie.id} src={props.cookie.cookieUrl} width="800" height="500"></iframe>
                        </div>
                    </div>
                </Modal>
            </div>
            </div>
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