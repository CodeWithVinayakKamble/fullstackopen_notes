import { useState } from "react";

const Display = ({ clicks, text }) => {
  return (
    <div>{text} : {clicks}</div>
  )
}

const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const App = () => {

  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([]);

  console.log(`Rendering clicks by value L:${clicks.left} | R:${clicks.right}`)

  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 });
    // setAll(allClicks.concat('L'));
    setAll([...allClicks, 'L']);
  };

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
    // setAll(allClicks.concat('R'));
    setAll([...allClicks, 'R']);
  };

  return (
    <div>
      <Display text="Left" clicks={clicks.left} />
      <Display text="Right" clicks={clicks.right} />

      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="Right" />
      <p>{allClicks.join(' ')}</p>
    </div>
  )

};

export default App;