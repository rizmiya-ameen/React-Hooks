import React, { useMemo, useState } from 'react'

const MemoFour = () => {
  const [ number, setNumber ] = useState(0)
  const [ dark, setDark ] = useState(false)

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black"
  }


  const handleMultiply = (number) => {

    for(let i=0; i <= 1000000000; i++) {}
    return number * 2
  }

  const doubledNumber = useMemo(() => handleMultiply(number), [number])

  return (
    <div>
      <h4>useMemo</h4>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => setDark(prevColor => !prevColor)}>Change Theme</button>
      <h3 style={themeStyles}>{doubledNumber}</h3>
      <hr />
    </div>
  )
}

export default MemoFour

//count multiplication is slow.
//but everytime you clicked theme change button, it is also lagging, because everytime a state is updated component is re-rendered and again the entire set of codes are executed, thats why theme change is also lagging. so will use useMemo to memorize this function and it only executed when number state is chnged. now theme is nicely changing without lagging.