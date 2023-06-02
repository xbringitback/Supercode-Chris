import {useState} from "react"

const Change = () => {
    const [isDay, setIsDay] = useState(true);

    const click = () => {
        setIsDay(!isDay);
    };

    const body = document.body;
    body.style.backgroundColor = isDay ? '#ffffff' : '#000000';
    // const backgroundColor = isDay ? '#ffffff' : '#000000';
    const textColor = isDay ? '#000000' : '#ffffff';
    const button = isDay ? 'Night' : 'Day';

    return (
        <div style={{ body, color: textColor }}>
        <h1>Day-Night Switch</h1>
        <button onClick={click}>{button}</button>
        </div>
    );
}
export default Change;