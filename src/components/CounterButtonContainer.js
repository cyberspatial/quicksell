import './CounterButtonContainer.css'
import Decreasing from './Decreasing';
import Increasing from './Increasing';
import Input from './Input';

function CounterButtonContainer() {

    return (
        <div className="counter_button_container">
            <Decreasing></Decreasing>
            <Input></Input>
            <Increasing></Increasing>

        </div>
    );
}

export default CounterButtonContainer;