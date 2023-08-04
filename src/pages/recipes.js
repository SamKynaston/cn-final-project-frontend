import HOCModal from '../components/HOCModal';
import Allcookies from '../components/allCookies';
import { useState, useEffect } from 'react';


const Recipes = (props) => {
   
    const [errorMessage, setErrorMessage] = useState([]);
    
    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            <h1>You are on the Recipe page</h1>
            <Allcookies allCookies={props.allCookies}/>
        </div>
    )
}

export default Recipes;