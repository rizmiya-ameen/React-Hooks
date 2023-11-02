import React from "react";
import { useState } from "react";

export default function Counter () {

  const [count, setCount ] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <hr />
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}
