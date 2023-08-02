import './style.css';
import Modal from 'react-modal';
import { loginUser } from "../utils";
import { useState } from "react";
import './style.css';

//successful login needs to bring up dynamic user info
const Login = ({newUser}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
        await loginUser(username, password, newUser)
    }
    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    return(
        <div className="loginMain">
            <button className="btn" onClick={openModal}>Login</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Login'
        >
          <div className="loginContainer">
          <button className="close" onClick={closeModal}>X</button>
            <h1>Please login:</h1>
            <form onSubmit={submitHandler}>
                <label className="label">Username:
                    <input onChange= {(e) => setUsername(e.target.value)}></input>
                </label>
            <br></br>
                <label className="label">Password:
                    <input type="password" onChange= {(e) => setPassword(e.target.value)}></input>
                </label>
            <br></br>
                <button type="submit">Click to login</button>
            </form>
        </div>
        </Modal>
        </div>
    )
}

export default Login;