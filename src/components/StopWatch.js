import React from 'react'
import { useRef, useState } from 'react';

const StopWatch = () => {
  const [Time, setTime] = useState(0);
  const Ref = useRef(null);
  const [running, setRunning] = useState(false);

  const start = (e) => {
    if (!running) {
      setRunning(true);
      Ref.current = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000);
    }

  }
  const stop = (e) => {
    if (running) {
      clearInterval(Ref.current);
      Ref.current = null;
      setRunning(false);
    }
  }

  const reset = () => {
   setTime(0);
  }

  return (
    <div>
      <h1>Stop Watch {Time}</h1>
      <button onClick={() => start()}>Start</button>
      <br></br>
      <br></br>
      <button onClick={() => stop()}>Stop</button>
      <br></br>
      <br></br>
      <button onClick={(e) => reset(e)}>Reset</button>
    </div>
  )
}

export default StopWatch
