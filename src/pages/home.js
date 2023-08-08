import './styles.css';
import CookieModal from '../components/homeModal';
import Slideone from '../components/images/slideshow-1.png';
import Slidetwo from '../components/images/slideshow-2.png';
import Slidethree from '../components/images/slideshow-3.png';
import { useState, useEffect } from "react";

const Home = (props) =>{
    // useEffect(() => {
    //     const [allCookies, setAllCookies] = useState([]);
    //     setAllCookies(props.cookies)
    // }, []);
    
    return (
      
        <div className="homePage">
            <div className='mainHomeImg'> 
            <img className='slideone' src={Slideone} alt='slide one' />
            <h2 className='cookietag'>COOKIE OF THE WEEK </h2>
            <p className='cookiebio'>After much thought we have decided to champion this deluxe Oreo cookie to be our cookie of the week. Thank you to everyone who voted, be sure to checkout our other recipes below.  </p>
            
            
            
            </div>
            <h1 className="title">OUR FAVOURITES</h1>
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