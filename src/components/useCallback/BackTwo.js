import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const BackOne = () => {

  const [ userInput, setUserInput ] = useState('');
  const [ result, setResult ] = useState(0);

  const [ num1 ] = useState(4);
  const [ num2 ] = useState(5);

  const sum = () => num1 + num2;

  useEffect(() => {
    console.log(`sum is : ${sum()}`);

    setResult(sum());
  }, [sum]);

  //actually this should be an infinite loop. but react is smart enough to stop it. it runs only two times and stopeed. 
  //console loged "sum is : 9" this, two times only. 
  //when the component mounts, it re-created the sum function and it caused the useEffect to execute, it update the result, (state is updated )again the component re-render... so infinite loop. 
  // to stop that will bring useCallback 

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