import './style.css';
import Login from './login';
import Register from './register';
import { Outlet, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Account from '../pages/account';
import Recipes from '../pages/recipes';
//Home button
//Cookie club button
//login/register section

const NavBar = () => {
    return(
        <>
        <div className="navbarMain">
            <nav>
                <Link to="/">THE COOKIE CLUB</Link>
                <Link to="/account">Account</Link>
                <Link to="/recipes">Recipe's</Link>
            </nav>
            <div className="loginorreg">
                <Login /> 
                <Register />
            </div>
    
        <Routes> 
            <Route index element={ <Home />} />
            <Route path="account" element={ <Account />} />
            <Route path="recipes" element={ <Recipes />} />
        </Routes>
        
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;