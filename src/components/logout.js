import { NavLink } from 'react-router-dom';
import './style.css';

 const Logout = (props) => {
            return(
                <div className="accAndLogoutDiv">
                    <div className="accountBtnDiv">
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/account">ACCOUNT</NavLink>
                    </div>
                    <div className="logoutDiv">
                    <NavLink className="logOut" to="/" onClick={()=> props.setLoginCookie('')}>LOGOUT</NavLink>
                    </div>
                </div>)
        }

export default Logout;