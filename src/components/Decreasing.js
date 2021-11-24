import './Decreasing.css'
import './Input'

function Decreasing(props) {

    const clickhandler = () => {
        document.getElementsByClassName('count')[0].value -= 1;
        console.log('clicked');
    }
    return (
        <button onClick={clickhandler} className="decrease">-</button>
    );
}

export default Decreasing;