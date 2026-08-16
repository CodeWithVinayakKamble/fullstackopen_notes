import { useState } from "react"

const Display = ({ counter }) => {
    return (
        <div>{counter}</div>
    )
};

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
};

const App = () => {
    const [counter, setCounter] = useState(0);
    console.log("Rendering With...", counter)

    const setToValue = (newValue) => {
        console.log("Updated Counter...", newValue);
        setCounter(newValue);
    }

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={() => setToValue(100)} text="Set to 100" />
            <Button onClick={() => setToValue(0)} text="Reset" />
            <Button onClick={() => setToValue(counter + 1)} text="Add 1" />
        </div >
    )

};


export default App;