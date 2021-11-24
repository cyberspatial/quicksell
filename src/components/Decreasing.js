import React from 'react';
import './Decreasing.css'
import './Input'

function Decreasing({onClickHandler}) {

    return (
        <button onClick={onClickHandler} className="decrease">-</button>
    );
}

export default Decreasing;