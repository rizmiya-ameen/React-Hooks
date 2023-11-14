import React, { useState, useEffect } from 'react'

const FourLayout = () => {

  const [ count, setCount ] = useState(0);

  useEffect(() => {
    console.log("Count is:", count )
  }, [count])

  return (
    <div>
      <h4>useLayoutEffect</h4>

      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <p>{count}</p>
      <hr />
    </div>
  )
}

export default FourLayout
