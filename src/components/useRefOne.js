import React from "react";
import { useState } from "react";

const useRefOne = () => {

  const [ name, setName ] = useState("");

  return (
    <div>
      <input 
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <h3>{name}</h3>
    </div>
  )
}

export default useRefOne