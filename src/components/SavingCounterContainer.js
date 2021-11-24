import React from 'react';

import Loader from './Loader';
import './SavingCounterContainer.css'

function SavingCounterContainer({ showLoader }) {
    return (

        <div className="loading-saving-container">
            {showLoader &&
                (<div className="loader-contain-check">
                    <Loader></Loader>
                    <p className="text">Saving counter value</p></div>)}
        </div>

    );
}

export default SavingCounterContainer;
