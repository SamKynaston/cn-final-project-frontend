import './style.css';
import { useState, useEffect } from 'react';
import HOCModal from './HOCModal';

const Allcookies = (props) => {
    const [errorMessage, setErrorMessage] = useState([]); 
    // const [label, setLabel] = useState("")

    return ( 
        <div className="allCookies">
            {errorMessage && <h3>{errorMessage}</h3>}
            {props.allCookies.map((data, index) => {
                return (
                    <HOCModal data={data} index={index} />
                )
            })}
        </div>
    );
}

export default Allcookies;