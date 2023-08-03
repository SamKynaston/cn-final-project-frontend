import './style.css';
import { useState, useEffect } from 'react';
import Modal from 'react-modal';

const Allcookies = () => {
    const [allCookies, setAllCookies] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [currentCookie, setCurrentCookie] = useState({});


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR");
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                setAllCookies(data.hits);
            } catch (err) {
                console.log(err)
                setErrorMessage("Data Not Found!")
            }
        }
        fetchData()
    }, []);

    function openModal() {
        setModalIsOpen(true);
    }
    function closeModal() {
        setModalIsOpen(false);
    }

    return (
        <div className="allCats">
            <h1>Recipes</h1>


            {errorMessage && <h3>{errorMessage}</h3>}
            {allCookies.map((data, index) => {
                setCurrentCookie(data)
                console.log(currentCookie)
                return (
                    <div className='CookieCard' key={index}>
                        <img src=
                            {data.recipe.images.SMALL.url}
                            alt={data.recipe.label}
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
                                <p>{data.recipe.label}</p>
                            </div>
                        </Modal>
                        <p>{currentCookie.recipe.label}</p>

                    </div>
                )
            })}
        </div>
    );
}

export default Allcookies;