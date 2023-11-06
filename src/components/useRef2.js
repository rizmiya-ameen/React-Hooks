import React, { useState, useRef } from 'react'

const RefTwo = () => {

  const [ name, setName ] = useState("");

  const inputRef = useRef()

  //console.log(inputRef)
  //{current: input}


  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <div>
      
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <h3>My name is {name}</h3>
      <button onClick={handleFocus}>Focus</button>
      <hr />
    </div>
  )
}

export default RefTwo