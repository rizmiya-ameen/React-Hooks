import { useState, useEffect, useCallback } from "react";

const BackFour = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const buildArray = () => [num1, num2];

  useEffect(() => {
      console.log(`New array: ${buildArray()}`);
      //setResult(buildArray());
  }, [buildArray]);

  // console logged "New array: 4,5" only once at component mount.
  //when i type rizmiya and delete it,  for every backspace i hit or for every letter i type it logs to the console "New array: 4,5" 14 times
  //but if i run setResult(buildArray());, now its going to cause endless loop. because array isnt a primitive data type, so react will not stop it. 

  return (
    <main>
            <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <h1>Output: {userInput || "--"}</h1>
            
            <hr />
        </main>
  )

}

export default BackFour

