import Register from './register';
import Login from './login';
import './style.css';

    const LoginOrAcc = (props) => {

            return(
            <div className="loginorreg">
                <Login newUser={props.newUser} setNewUser={props.setNewUser} loginCookie={props.loginCookie} setLoginCookie={props.setLoginCookie} /> 
                <Register />
            </div>)
            }

    export default LoginOrAcc