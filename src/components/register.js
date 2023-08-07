import React from "react";
import Modal from 'react-modal';
import { registerUser } from "../utils";
import { useState } from "react";
import './style.css';

//successful register needs to bring up dynamic user info

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(firstName)
        console.log(lastName)
        console.log(username)
        console.log(email)
        console.log(password)
        await registerUser(username, email, password)
        setTimeout(() => closeModal(), 4000)
    }

    return(
        <div className="registerMain">
            <button className="lrbtn" onClick={openModal}>SIGN UP</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          ariaHideApp={false}
          contentLabel='Register'
        >
          <div className="registerContainer">
          <button className="close" onClick={closeModal}>X</button>
          <h1 className="opening">What are you waiting for? Become a Cookie Connoisseur today!</h1>
            <form onSubmit = {submitHandler}>
            <div className="inputs">
            <div className="left">
                <label className="label">FIRST NAME:
                    <input className="input" onChange= {(e) => setFirstName(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">USERNAME:
                    <input className="input" onChange= {(e) => setUsername(e.target.value)} required></input>
                </label>
            <br></br>
                <label className="label">PASSWORD:
                    <input className="input" type="password" onChange= {(e) => setPassword(e.target.value)} required></input>
                </label>
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
                    <input className="input" type="password" onChange= {(e) => setPassword(e.target.value)} required></input>
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
        </Modal>
        </div>
    )
}

export default Register;