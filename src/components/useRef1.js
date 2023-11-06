import React from "react";
import { useState, useEffect, useRef } from "react";

const RefOne = () => {

  const [ name, setName ] = useState("");

  const ref = useRef(0);

  useEffect(() => {
    ref.current = ref.current + 1
  })

  // useEffect hook is set up without a dependency array. Consequently, it runs on every render.

  //When useEffect doesn’t have a dependency array specified (the second argument), it runs after every render, including the initial render and every re-render that occurs due to changes in state or props.

  //we can change this rendercount.current as much as we want as many times as we want and we'll never ever cause our component to re-render because it's completely separate from our component render cycle. 
  
  //The important thing about ref is it's very very similar to state and that you can store a previous value in it and it persists between different renders but it does not cause you to re-render like state does

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