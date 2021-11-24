import React from 'react';
import './CounterDisplay.css'

function CounterDisplay({val}) {

    return (
        <div className="counter_text_display">
            <p className="countervalue">Counter&nbsp;value&nbsp;:&nbsp;</p>
            <p className="updatedvalue">{val}</p>
        </div>);
}

export default CounterDisplay;