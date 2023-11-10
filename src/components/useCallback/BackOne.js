import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const BackOne = () => {

  const [ userInput, setUserInput ] = useState('');

  const [ num1 ] = useState(4);
  const [ num2 ] = useState(5);

  const sum = () => num1 + num2;

  useEffect(() => {
    console.log(sum());
  }, [sum]);

  return (
    <div>
      <h4>useCallback</h4>

      <input 
        type='text'
        placeholder='input'
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <p>{userInput}</p>
      <hr />
    </div>
  )
}

export default BackOne

//useCallback returns a memorized function.