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
                <Link to="/">Home</Link>
                <Link to="/account">Account</Link>
                <Link to="/recipes">Recipe's</Link>
            </nav>
            <div className="loginorreg">
                <Login />
                <Register />
            </div>
        
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;