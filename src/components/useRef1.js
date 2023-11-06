import React from "react";
import { useState, useEffect, useRef } from "react";

const RefOne = () => {

  const [ name, setName ] = useState("");

  const ref = useRef(0);

  useEffect(() => {
    ref.current = ref.current + 1
  })

  return (
    <div>
      <hr />
    <input 
      type="text"
      value={name}
      onChange={e => setName(e.target.value)}
    />
    <h3>My name is {name}</h3>
    <h3>I rendered {ref.current} times</h3>
    <hr />
  </div>
  )
}

export default RefOne