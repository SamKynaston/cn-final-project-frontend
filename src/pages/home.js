import './styles.css';
import CookieModal from '../components/homeModal';
// import { useState, useEffect } from "react";

const Home = (props) =>{
    // useEffect(() => {
    //     const [allCookies, setAllCookies] = useState([]);
    //     setAllCookies(props.cookies)
    // }, []);
    
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