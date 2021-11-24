
import Loader from './Loader';
import './SavingCounterContainer.css'

function SavingCounterContainer() {
    return (

        <div className="loading-saving-container">
            <Loader></Loader>
            <p className="text">Saving counter value</p>
        </div>

    );
}

export default SavingCounterContainer;
