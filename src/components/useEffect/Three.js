import React from 'react'
import { useEffect, useState } from 'react';

const EffectThree = () => {

  const [count, setCount ] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1)
  }

  useEffect(() => {
    console.log("count is:", count)

    return () => {
      console.log("Im cleared up")
    }

  }, [count]) // dependency array

  // on mount
    // count is: 0

    // after pressing increment button
    // Im cleared up
    // count is: 1
    // useEffect will first run the code on mount of the component, whatever it is inside. As we can see here, the count is zero, that is going to be logged guaranteed at least once on mount. 
    
    //And then if you give it a dependency array, whenever something in that dependency array changes, the useEffect hook will destroy itself. And it will run this cleanup function before doing so. And then it's going to be recreated with the new value.

    //That is how useEffect is able to log the new value every time it's being updated, because it is being destroyed, it is then cleaning up after itself. And then it is rerunning with the new value. This is very important because this is how useEffect works.




    /*

    useEffect(() => {
    console.log("count is:", count)

    return () => {
      console.log("Im cleared up")
    }

    }, [])

    if you didn't provide anything in the dependency  array,
    the return function, still runs. But this time, it runs on
    unmount of the component.
    Because when the component unmounts, this effect is no longer needed. And
    you might still have a timeout,
    you might still have an event listener or something that needs to be cleaned up.
    */
  
  return (
    <div>
      <h1>useEffect</h1>
      <button onClick={handleIncrement}>+</button>
      <h1>{count}</h1>
      <button onClick={handleDecrement}>-</button>
      <hr />
    </div>
  )
}

export default EffectThree

