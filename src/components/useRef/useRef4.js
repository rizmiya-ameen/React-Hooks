import React from 'react'
import { useState, useRef } from 'react';

const RefFour = () => {

  const [ count, setCount ] = useState(0);

  const countRef = useRef(0)

  const handleCount = () => {
    setCount(prevCount => prevCount + 1 );
    countRef.current = countRef.current + 1;

    console.log("state:", count); //state: 0
    //state is updated and after running handlecount, it will re-render the component and update the count

    console.log("ref:", countRef.current); //ref: 1
    //itdoesnt trigger re-render
  }

  return (
    <div>
      <h4>useRef</h4>
      <h3>Count: {count}</h3>
      <button onClick={handleCount}>Increment</button>
      <hr />
    </div>
  )
}

export default RefFour