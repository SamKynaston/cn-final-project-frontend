import './style.css';
import Login from './login';
import Register from './register';
import { Outlet, NavLink } from 'react-router-dom';
// import Search from './search'
//Home button
//Cookie club button
//login/register section

const NavBar = () => {
    return(
        <>
        <div className="navbarMain">
            <nav>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/">THE COOKIE CLUB</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/account">ACCOUNT</NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/recipes">RECIPES</NavLink>
            </nav>
            <div className="loginorreg">
                <Login /> 
                <Register />
                {/* <Search /> */}
            </div>
        
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;
