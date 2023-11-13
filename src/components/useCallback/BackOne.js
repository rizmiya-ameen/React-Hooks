import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const BackOne = () => {

  const [ userInput, setUserInput ] = useState('');

  const [ num1 ] = useState(4);
  const [ num2 ] = useState(5);

  const sum = () => num1 + num2;
  //actually this function is recreated everytime the component re-renders. so useEffect also executed everytimr the component re-renders.

  useEffect(() => {
    console.log(`sum is : ${sum()}`);
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
      <p>{userInput? userInput : "--"}</p>
      <hr />
    </div>
  )
}

export default BackOne

//useCallback returns a memorized function.

// here when i update userInput (example "Rizmiya"), console logs  "sum is : 9" 7 times, eventhough the sum hasnt changed.



