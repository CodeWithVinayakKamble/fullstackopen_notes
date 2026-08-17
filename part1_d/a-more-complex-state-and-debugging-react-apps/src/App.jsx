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

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>the app is used by pressing the buttons Left | Right</div>
    )
  };

  return (
    <div>Button pressed history : {allClicks.join(' ')}</div>
  )
};

const Total = ({ total }) => {
  return (
    <div>Total Clickes Left + Right : {total} </div>
  )
}

const App = () => {

  const [clicks, setClicks] = useState({ left: 0, right: 0 })
  const [allClicks, setAll] = useState([]);
  const [total, setTotal] = useState(0);

  console.log(`Rendering clicks by value L:${clicks.left} | R:${clicks.right}`);
  console.log(`Total Clicks : ${total}`);

  const handleLeftClick = () => {
    // setAll(allClicks.concat('L'));
    setAll([...allClicks, 'L']);
    console.log('left before', clicks.left)

    const updateLeft = clicks.left + 1;

    setClicks({ ...clicks, left: updateLeft });
    console.log('left after', updateLeft)

    setTotal(updateLeft + clicks.right)
  };

  const handleRightClick = () => {
    // setAll(allClicks.concat('R'));
    setAll([...allClicks, 'R']);
    console.log('right before', clicks.right);
    const updateRight = clicks.right + 1;

    setClicks({ ...clicks, right: updateRight });
    console.log('right after', updateRight);

    setTotal(clicks.left + updateRight);
  };

  return (
    <div>
      <Display text="Left" clicks={clicks.left} />
      <Display text="Right" clicks={clicks.right} />

      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="Right" />
      <History allClicks={allClicks} />
      <Total total={total} />
    </div>
  )

};

export default App;