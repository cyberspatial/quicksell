import React,{useEffect} from 'react';

import './Input.css'
function Input({val,onInput}) {


    return (
        <input type="number" className="count" value={val} onChange={e => onInput(e.target.value)}></input>
    );
}

export default Input;