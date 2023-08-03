import './style.css';
import { useState, useEffect } from 'react';

const Cookies = () => {
    const [allCookies, setAllCookies] = useState([]);
    const [errorMessage, setErrorMessage] = useState([]);

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


    return (
        <div className="cookiePage">
            <h1>Fetching Data</h1>
            {errorMessage && <h3>{errorMessage}</h3>}

            {allCookies.map((data, index) => {
                return <p key={index}>NAME: {data.recipe.label}</p>
            })}
        </div>
    );
}

export default Cookies;