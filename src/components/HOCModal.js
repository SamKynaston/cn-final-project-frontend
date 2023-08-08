import Modal from 'react-modal';
import { useState } from "react"
import './HOCModal.css';
import Arrow from "./images/arrow.png"


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
            <img className='cookieIMG' src=
                {props.data.recipe.images.SMALL.url}
                alt={props.data.recipe.label}
            // onClick={openModal}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                contentLabel='openCookie'
            >
                <div className="modalContainer">

                    <div className="modalTop">

                        <div className='modalLeft'>
                            <img className='modalIMG' src=
                                {props.data.recipe.images.SMALL.url}
                                alt={props.data.recipe.label}
                                onClick={openModal}
                            />
                        </div>

                        <div className='modalRight'>
                            <button className="closeBtn" onClick={closeModal}>X</button>
                            <p className='modalTxt'>{props.data.recipe.label}</p>
                            <h2>Ingredients</h2>
                            {props.data.recipe.ingredients.map((ingredient, index) => (
                                <p>{ingredient.text}</p>
                            ))}
                        </div>

                    </div>

                    <h2>Method</h2>
                    <div>
                        <a href={props.data.recipe.shareAs}>
                            <button className='methodBtn'>Method</button>
                        </a>
                    </div>
                </div>


            </Modal>
            <div className='label'>
                <p className='recipeTxt'>{props.data.recipe.label}</p>
                <button className='modalBtn' onClick={openModal}>🡲</button>
            </div>
        </div>
    )
}

export default HOCModal;




