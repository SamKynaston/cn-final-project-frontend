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
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <h1>React Router</h1>
    
        <Routes>
            <Route path="/" element={ <Home />}>    
                <Route index element={ <Home />} />
                <Route path="/account" element={ <Account />} />
                <Route path="/recipes" element={ <Recipes />} />
                <Route path="/login" element={ <Login />} />
                <Route path="/register" element={ <Register />} />
            </Route>
        </Routes>
        </div>
        <Outlet />
        </>
    )
}

export default NavBar;