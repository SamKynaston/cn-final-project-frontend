import './styles.css';
import CookieModal from '../components/homeModal';
import Slideone from '../components/images/slideshow-1.png';
import Slidetwo from '../components/images/slideshow-2.png';
import Slidethree from '../components/images/slideshow-3.png';
import { useState, useEffect } from "react";

const Home = (props) => {
    useEffect(() => {
        const [allCookies, setAllCookies] = useState([]);
        setAllCookies(props.cookies)
    }, []);

    return (
      
        <div className="homePage">
            <h1 className="title">THE COOKIE CLUB</h1>
    <div className="carouselMain">
    {props.cookies?.slice(0, 5).map((cookie, index) => {
     return <div key={index}>
        <CookieModal cookie={cookie} index={index} />
        </div>
    })}      
    </div>
    </div>
    )
}

export default Home;