// import Recipe from '../components/recipe';
import Modal from 'react-modal';
import './styles.css';
import slideOne from '../components/images/slideshow-1.png'
import { useState, useEffect } from "react";

const Home = () =>{
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [allCookies, setAllCookies] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR&random=true");
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            const data = await response.json()
            console.log(data)
            setAllCookies(data.hits);
        } catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
    fetchData()
}, []);
console.log(allCookies)

    return (
    <div className="carouselMain">
    {allCookies.map((cookie, index) => {
     return <div>
      <div className="carouselItem">
        <img key={index} id="slides" className="slide" src={cookie.recipe.images.SMALL.url} alt="Cookies" onClick={() => setModalIsOpen(true)}></img>
        <h1 className="name">{cookie.recipe.label}</h1>
        </div>
            <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          ariaHideApp={false}
          contentLabel='Recipe'
        >
          <div className="recipeContainer">
          <button className="close" onClick={() => setModalIsOpen(false)}>X</button>
          <h1>{cookie.recipe.label}</h1>
        <h1 className="recipeTitle">{cookie.recipe.label}</h1>
        <embed type="text/html" src={cookie.recipe.shareAs} width="1000" height="500"></embed>
        </div>
        </Modal>
        </div>
    })}      
    </div>
    )
}

export default Home;