import './App.css';
import './components/style.css';

import { useState, useEffect } from 'react';
import { Outlet, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/home';
import Account from './pages/account';
import Recipes from './pages/recipes';
import NavBar from './components/navBar';
import Allcookies from './components/allCookies';

function App() {
  const [allCookies, setAllCookies] = useState([]);
  const [errorMessage, setErrorMessage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            // const response = await fetch(process.env.PUT_API_LINK_HERE);
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
    <div className="App">
        <NavBar />
        <Routes> 
          <Route index element={ <Home />} />
          <Route path="account" element={ <Account />} />
          <Route path="recipes" element={ <Recipes allCookies={allCookies} />} />
        </Routes>
      
    </div>
  );
}

export default App;
