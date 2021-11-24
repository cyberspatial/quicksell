import React, { useState, useEffect } from 'react'

import CounterButtonContainer from './CounterButtonContainer';
import CounterDisplay from './CounterDisplay';
import './Innercontainer.css'
import SavingCounterContainer from './SavingCounterContainer';

function InnerContainer() {

    const [val,setVal] = useState(1)
    const [showLoader,setShowLoader] = useState(false)

    const MAX_VALUE = process.env.REACT_APP_MAX_VALUE || 1000

    useEffect(() => {
      const url = "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/ravipratapsingh.json";

        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            if(json) {
                setVal(json)
            } 
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData(); 
    }, []);
     
    useEffect(() => {
      const url = "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";
      const putData = async () => {
        try{
          setShowLoader(true)
          const rawResponse = await fetch(url, {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ravipratapsingh: val})
          });
          await rawResponse.json();  
          setShowLoader(false)
        } catch (error) {
          console.log("error", error);
        }}
        putData()
  }, [val]);

    const onUpdateVal = (_val) => {
      _val = Math.min(_val,MAX_VALUE)
      setVal(_val)
    }

    return (
        <div className="innercontainer">
            {showLoader && <SavingCounterContainer></SavingCounterContainer>}
            <CounterButtonContainer val={val} onUpdate={(_val) => onUpdateVal(_val)}></CounterButtonContainer>
            <CounterDisplay val={val}></CounterDisplay>
        </div>
    );
}

export default InnerContainer;
