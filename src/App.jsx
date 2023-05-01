import { useState, useEffect } from "react";
import "./App.css";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [stopFlag, setStopFlag] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stopFlag || count === 10) {
        return;
      }
      setCount((c) => c + 1); //
    }, 1000);
    return () => clearInterval(intervalId);
  }, [stopFlag, count]);

  const clickHandler = () => {
    setStopFlag(true);
  };

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button onClick={clickHandler}>STOP</button>
    </div>
  );
}
