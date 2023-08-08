import './allCookies.css';
import { useState, useEffect } from 'react';
import HOCModal from './HOCModal';

const Allcookies = (props) => {
    const [errorMessage, setErrorMessage] = useState([]);
    // const [label, setLabel] = useState("")

    return (
        <div className="allCookies">
            {errorMessage && <h3>{errorMessage}</h3>}

            <div className='row1'>
            {props.allCookies?.slice(0, 3).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} />
                )
            })}
            </div>

            <div className='row2'>
            {props.allCookies?.slice(4,7).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} />
                )
            })}
            </div>

            <div className='row3'>
            {props.allCookies?.slice(8,11).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} />
                )
            })}
            </div>

            <div className='row3'>
            {props.allCookies?.slice(12,15).map((data, index) => {
                return (
                    <HOCModal data={data} index={index} />
                )
            })}
            </div>
        </div>
    );
}

export default Allcookies;