import './style.css';
import LoginOrAcc from './loginOrAcc';
import Logout from './logout';
import { Outlet, NavLink } from 'react-router-dom';
import { CookieLogo } from '../components/images/cookie-logo.png'
// import Search from './search'
import { useState } from 'react';

const NavBar = (props) => {

    return(
        <>
        <div className="navbarMain">
            <nav>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/"><image className='cookieLogo' src={CookieLogo} alt="" /></NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/recipes">RECIPES</NavLink>
            </nav>
                {props.loginCookie
                ?
                <Logout setLoginCookie={props.setLoginCookie} /> 
                 :
                 <LoginOrAcc loginCookie={props.loginCookie} setLoginCookie={props.setLoginCookie} newUser={props.newUser} setNewUser={props.setNewUser} /> 
                 }
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;
