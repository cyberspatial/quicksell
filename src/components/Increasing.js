import React from 'react';
import './Increasing.css'

function Increasing({onClickHandler}) {
    return (
        <button className="increase" onClick={onClickHandler}>+</button>
    );
}
export default Increasing;