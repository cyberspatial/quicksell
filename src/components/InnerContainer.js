import React,{useEffect,useState} from 'react'

import CounterButtonContainer from './CounterButtonContainer';
import CounterDisplay from './CounterDisplay';
import './Innercontainer.css'
import SavingCounterContainer from './SavingCounterContainer';
function InnerContainer() {

    const [value,setValue] = useState(0)

    const useEffect = () => {
        
    }

    return (
        <div className="innercontainer">
            <SavingCounterContainer></SavingCounterContainer>
            <CounterButtonContainer></CounterButtonContainer>
            <CounterDisplay></CounterDisplay>
        </div>
    );
}

export default InnerContainer;
