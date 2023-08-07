import Allcookies from '../components/allCookies';
import { useState } from 'react';


const Recipes = (props) => {
   
    const [errorMessage, setErrorMessage] = useState([]);
    
    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            <h1>Recipe</h1>
            <Allcookies allCookies={props.allCookies}/>
        </div>
    )
}

export default Recipes;