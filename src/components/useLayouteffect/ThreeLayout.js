import React from 'react'
import { useState, useLayoutEffect } from 'react'
import Button from './Button'

const userIds = [1,2]

const ThreeLayout = () => {

  const [ userId, setUserId ] = useState(userIds[0]);
  const [ isAdmin, setIsAdmin ] = useState(true);

  
  //this artificaially slows down the rendering
  let now = performance.now();
  while (performance.now() - now < 200) {

  }

  useLayoutEffect(() => {
    setIsAdmin(userId === userIds[0])
  }, [userId]);

  const handleChange = () => {
    const otherId = userIds.find(id => id !== userId);
    setUserId(otherId);
  }
  
  return (
    <div>
      <h4>useLayouteffect</h4>

      <p>userId: {userId}</p>
      <p>Admin: {isAdmin ? 'true' : 'false'}</p>
      <Button handleChange={handleChange}/>
      <hr />
    </div>
  )
}

export default ThreeLayout

// earlier - useEffect (ASYNCHRONOUS) - in 200ms userId printed, and after 400ms -isAdmin printed

//now -useLayoutEffect (SYNCHRONOUS) - bothprinted at the same time but after 400 ms

//now when i click the button it calls handleChange function which updates the state. so component re-renders. comes from top to bottom, this will now wait for 200 millisec. now we have this code inside of useLayoutEffect which means that this component will stop here and execute this code and will not continue rendering and, update the next state isAdmin, then trigger another render so it's going to go to top and then update isAdmin then it's going to come back here again wait for another 200 milliseconds so so now that's 400ms. then finally get to proceed and render out the actual jsx with the userId and isAdmin both updated at the same time so that's what you're seeing here we're pressing change user both of these updates are happening at the same time. 


//one of the caveats of using useLayoutEffect is that it's not good for performance you're essentially blocking the entire rendering just to run this piece of code which is not good for your user experience.

//the only difference is that the code that is run inside of this useLayoutEffect is synchronous it is not asynchronous like useEffect it is synchronous which means that it's actually going to block the rendering of this component until it executes this code. 
