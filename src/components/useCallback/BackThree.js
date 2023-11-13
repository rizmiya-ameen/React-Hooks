import React, { useCallback, useEffect, useState, } from 'react'

const BackThree = () => {

  const [ userInput, setUserInput ] = useState('');
  const [ result, setResult ] = useState(0);

  const [ num1 ] = useState(4);
  const [ num2 ] = useState(5);

  const sum = useCallback(
    () => {
      return num1 + num2;
    }
  , [num1, num2])

  useEffect(() => {
    console.log(`sum is : ${sum()}`);

    setResult(sum());
  }, [sum]);

  //console loged "sum is : 9" this, only 1 time now 
  // also it doesnt execute useEffect when i update "userInput"
  //we are re-rendering the component when we update userInput, but sum is not changing now. not re-creating the sum function, it's memoized 
  
  //what use callback does is memoize the function so now it will have referential equality

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

export default BackThree
