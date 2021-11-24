import React from 'react';
import './CounterButtonContainer.css'
import Decreasing from './Decreasing';
import Increasing from './Increasing';
import Input from './Input';

function CounterButtonContainer({val,onUpdate}) {

    const onDecrease = () => {
        onUpdate(val-1)
    }

    const onIncrease = () => {
        onUpdate(val+1)
    }

    const onInput = (_val) => {
        onUpdate(+_val)
    }

    return (
        <div className="counter_button_container">
            <Decreasing onClickHandler={onDecrease}></Decreasing>
            <Input val={val} onInput={onInput}></Input>
            <Increasing onClickHandler={onIncrease}></Increasing>
        </div>
    );
}

export default CounterButtonContainer;