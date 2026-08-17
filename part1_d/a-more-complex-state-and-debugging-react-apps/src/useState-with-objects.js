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
  console.log(`Rendering clicks by value L:${clicks.left} | R:${clicks.right}`)
  
  const handleLeftClick = () => {
    setClicks({ ...clicks, left: clicks.left + 1 })
  };

  const handleRightClick = () => {
    setClicks({ ...clicks, right: clicks.right + 1 });
  };

  return (
    <div>
      <Display text="Left" clicks={clicks.left} />
      <Display text="Right" clicks={clicks.right} />

      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="Right" />
    </div>
  )

};

export default App;