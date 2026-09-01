import { useState } from "react";

const Display = ({ textToShow }) => {
    return (
        <div>
            <p>{textToShow}</p>
        </div>
    );
};

const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
};

const App = () => {

    const [msg, setMsg] = useState("");

    // Standard Arrow Syantax
    // const hello = () => {
    //     const handler = () => {
    //         setMsg("Hello React User , Welcome To react World , We are testing now A function that actually returns a function which basic Concept in JavaScript Called 'Closures'")
    //     }
    //     return handler;
    // };

    // Vanila Js Syntax
    // const hello = () => {
    //     return function handler() {
    //         setMsg("Hello React User , Welcome To react World , We are testing now A function that actually returns a function which basic Concept in JavaScript Called 'Closures'")

    //     };
    // };

    // Modern React Syntax
    const hello = () => () => setMsg("Hello React User , Welcome To react World , We are testing now A function that actually returns a function which basic Concept in JavaScript Called 'Closures'");


    return (
        <div>
            <Display textToShow={msg} />
            <Button onClick={hello()} text="Show Text" />
        </div>
    )
};

export default App;