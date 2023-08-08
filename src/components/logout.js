import { NavLink } from 'react-router-dom';
import './style.css';

 const Logout = (props) => {
            return(
                <div className="accAndLogoutDiv">
                    <div className="accountBtnDiv">
                    <NavLink className={({isActive}) => isActive ? "current": "page" }  to="/account">ACCOUNT</NavLink>
                    </div>
                    <div className="logoutDiv">
                    <button className="logOut" onClick={()=> props.setLoginCookie('')}>Logout</button>
                    </div>
                </div>)
        }

export default Logout;