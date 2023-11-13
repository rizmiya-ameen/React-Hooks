import { useState, useEffect, useCallback } from "react";

const BackFive = () => {
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState(0);
  const [num1] = useState(4);
  const [num2] = useState(5);

  const buildArray = useCallback(() => {
    return [num1, num2];
  }, [num1, num2])

  useEffect(() => {
      console.log(`New array: ${buildArray()}`);
      setResult(buildArray());
  }, [buildArray]);
  

  //now no endless loop
  //console logged "New array: 4,5" only once at component mounts
  // also when i update userInput also, it doesnt trigger the console to log "New array: 4,5"
  //actually callback memorizes the function

  return (
    <main>
            <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
            <h1>Output: {userInput || "--"}</h1>
            <p>Result: {JSON.stringify(result)}</p>
            <hr />
        </main>
  )

}

export default BackFive

