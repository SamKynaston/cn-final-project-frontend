import Recipe from '../components/recipe';
import Modal from 'react-modal';
import slideshow1 from '../components/images/slideshow-1.png';
import slideshow2 from '../components/images/slideshow-2.png';
import slideshow3 from '../components/images/slideshow-3.png';
import './styles.css';
import { useState, useEffect } from "react";

const Home = () =>{
    const [modal1IsOpen, setModal1IsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);
    const [modal3IsOpen, setModal3IsOpen] = useState(false);
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
    <div className="random">
        <h1>You are on the Home page</h1>
        <div className="carouselMain">
            <img id="slides" className="slide" src={slideshow1} alt="Cookie disected" onClick={() => setModal1IsOpen(true)}></img>
            <Modal
          isOpen={modal1IsOpen}
          onRequestClose={() => setModal1IsOpen(false)}
          ariaHideApp={false}
          contentLabel='Recipe1'
        >
          <div className="recipeContainer">
          <button className="close" onClick={() => setModal1IsOpen(false)}>X</button>
          <h1>Cookie 1</h1>
            <Recipe cookies={allCookies} />
            </div>
        </Modal>
            <img id="slides" className="slide" src={slideshow2} alt="Cookies" onClick={() => setModal2IsOpen(true)}></img>
            <Modal
          isOpen={modal2IsOpen}
          onRequestClose={() => setModal2IsOpen(false)}
          ariaHideApp={false}
          contentLabel='Recipe2'
        >
          <div className="recipeContainer">
          <button className="close" onClick={() => setModal2IsOpen(false)}>X</button>
          <h1>Cookie 2</h1>
              <Recipe cookies={allCookies} />
            </div>
        </Modal>
            <img id="slides" className="slide" src={slideshow3} alt="Cookie disected" onClick={() => setModal3IsOpen(true)}></img>
            <Modal
          isOpen={modal3IsOpen}
          onRequestClose={() => setModal3IsOpen(false)}
          ariaHideApp={false}
          contentLabel='Recipe3'
        >
          <div className="recipeContainer">
          <button className="close" onClick={() => setModal3IsOpen(false)}>X</button>
                 <h1>Cookie 3</h1>
                 <Recipe cookies={allCookies} />
            </div>
        </Modal>
        </div>
    </div>
    )
}

export default Home;