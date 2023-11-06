
//another great use case for refs is to store something like the previous value of your state because there's no way to get the previous value of state. it's just always the value of "THE state". 

//refs are really useful for not only accessing dom elements but they're really useful for persisting values across renders without actually causing a rerender

import React, { useEffect, useState, useRef } from 'react'

const RefThree = () => {

  const [ name, setName ] = useState("")

  const inputRef = useRef()

  useEffect(() => {
    inputRef.current = name
  }, [name])

  return (
    <div>
      <input 
      ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>My name is {name} and it is used to be {inputRef.current}</h3>
      <hr />
    </div>
  )
}

export default RefThree