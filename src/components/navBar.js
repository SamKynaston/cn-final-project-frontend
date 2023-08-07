import './style.css';
import Login from './login';
import Register from './register';
import { Outlet, NavLink } from 'react-router-dom';
// import Search from './search'
//Home button
//Cookie club button
//login/register section


const NavBar = (props) => {

    function loginOrAccount(loginCookie, setLoginCookie){
        if(!loginCookie){
            return(
            <div className="loginorreg">
                <Login newUser={props.newUser} setNewUser={props.setNewUser} loginCookie={loginCookie} setLoginCookie={setLoginCookie} /> 
                <Register />
                {/* <Search /> */}
            </div>)
        } else{
            return(
                <div>
                    <div>
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/account">ACCOUNT</NavLink>
                    </div>
                    <div>
                    <button className="logOut" onClick={()=> setLoginCookie('')}> </button>
                    </div>
                </div>)
            {/* <Search /> */}
        }
    }

    return(
        <>
        <div className="navbarMain">
            <nav>
                <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/">THE COOKIE CLUB</NavLink>
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
