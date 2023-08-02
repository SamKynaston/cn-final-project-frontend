import React from "react";
import Modal from 'react-modal';
import { registerUser } from "../utils";
import { useState } from "react";
import './style.css';

//register
//successful register brings up dynamic user info

const Register = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
    
    function closeModal() {
        setModalIsOpen(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(username)
        console.log(email)
        console.log(password)
        await registerUser(username, email, password)
    }

    return(
        <div className="registerMain">
            <button className="btn" onClick={openModal}>Sign Up</button>
        <Modal
          closeTimeoutMS={3000}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Register'
        >
          <div className="registerContainer">
          <button className="close" onClick={closeModal}>X</button>
          <h1>Please register:</h1>
            <form onSubmit = {submitHandler}>
                <label className="label">Username:
                    <input onChange= {(e) => setUsername(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">Email:
                    <input onChange= {(e) => setEmail(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label"yeh>Password:
                    <input type="password" onChange= {(e) => setPassword(e.target.value)} required></input>
                </label>
            <br></br>
                <input type="checkbox" id="tsandcs" name="tsandcs" value="Agree"></input>
                <label for="tsandcs"> I have read and agree to the <a className="tandc" href="#">terms & conditions</a> of The Cookie Club.</label><br></br>
                <button type="submit">Click to register</button>
            </form>
          </div>
        </Modal>
        </div>
    )
}

export default Register;