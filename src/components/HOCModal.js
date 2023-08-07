import Modal from 'react-modal';
import { useState } from "react"


const HOCModal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className='CookieCard' key={props.index}>
            <img src=
                {props.data.recipe.images.SMALL.url}
                alt={props.data.recipe.label}
                onClick={openModal}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel='openCookie'
            >
                <div className="cookieContainer">
                    <button className="close" onClick={closeModal}>X</button>
                    <p>{props.data.recipe.label}</p>
                    <img src=
                        {props.data.recipe.images.SMALL.url}
                        alt={props.data.recipe.label}
                        onClick={openModal}
                    />
                </div>
                <h2>Ingredients</h2>
                {props.data.recipe.ingredients.map((ingredient, index) => (
                    <p>{ingredient.text}</p>
                ))}
                <h2>Method</h2>
                {props.data.recipe.url.map((method, index) => (
                    <button>{method}</button>
                ))}
            </Modal>
            <div className='labelText'>
            <p><b>{props.data.recipe.label}</b></p>
            </div>
        </div>
    )
}

export default HOCModal;




