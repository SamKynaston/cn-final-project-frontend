import './style.css';
import Login from './login';
import Register from './register';
import { Outlet, NavLink } from 'react-router-dom';
import { CookieLogo } from '../components/images/cookie-logo.png'
// import Search from './search'
//Home button
//Cookie club button
//login/register section


const NavBar = (props) => {

    function loginOrAccount(props){
        if(!props.loginCookie){
            return(
            <div className="loginorreg">
                <Login newUser={props.newUser} setNewUser={props.setNewUser} loginCookie={props.loginCookie} setLoginCookie={props.setLoginCookie} /> 
                <Register />
            </div>)
        } else{
            return(
                <div>
                    <div>
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/account">ACCOUNT</NavLink>
                    </div>
                    <div>
                    <button className="logOut" onClick={()=> props.setLoginCookie('')}> </button>
                    </div>
                </div>)
        }
    }

    return(
        <>
        <div className="navbarMain">
            <nav>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/"><image className='cookieLogo' src={CookieLogo} alt="" /></NavLink>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/recipes">RECIPES</NavLink>
                {loginOrAccount(props.loginCookie, props.setLoginCookie)}
            </nav>
            
            
        
            <div className="mainContent">
                <Outlet />
            </div>
        </div>
        </>
    )
}

export default NavBar;
