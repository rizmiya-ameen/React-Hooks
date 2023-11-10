import React, { useState } from 'react'

const MemoThree = () => {

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

  const doubledNumber = handleMultiply(number)

  return (
    <div>
      <h1>useMemo</h1>
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() => setDark(prevColor => !prevColor)}>Change Theme</button>
      <h3 style={themeStyles}>{doubledNumber}</h3>
      <hr />
    </div>
  )
}

export default MemoThree