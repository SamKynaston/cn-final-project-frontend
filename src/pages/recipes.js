import Allcookies from '../components/allCookies';
import { useState, useEffect } from 'react';


const Recipes = () =>{

    const [allCookies, setAllCookies] = useState(["hello, world"]);
    const [errorMessage, setErrorMessage] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id=75e99c71&app_key=%2039b5b32d6e177083e0fbd7f397789d79&dishType=Biscuits%20and%20cookies&imageSize=REGULAR");
                if (!response.ok) {
                    throw new Error(response.statusText)
                }
                const data = await response.json()
                console.log(data)
                setAllCookies(data.hits);
            } catch (err) {
                console.log(err)
                setErrorMessage("Data Not Found!")
            }
        }
        fetchData()
    }, []);

    return (
        <div>
            {errorMessage && <h3>{errorMessage}</h3>}
            <h1>You are on the Recipe page</h1>
            <Allcookies allCookies={allCookies} />
        </div>
    )
}

export default Recipes;