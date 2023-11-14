import React from 'react'
import { useState, useEffect } from 'react'
import Button from './Button'

const userIds = [1,2]

const TwoLayout = () => {

  const [ userId, setUserId ] = useState(userIds[0]);
  const [ isAdmin, setIsAdmin ] = useState(true);

  
  //this artificaially slows down the rendering
  let now = performance.now();
  while (performance.now() - now < 200) {

  }

  useEffect(() => {
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

export default TwoLayout

//here if i press the button "click me", we can notice that userId: chaged first and then Admin is changed.WHY?

// button clicked -> it will call handleChange function and it is executed, and it will update the state userId. so component re-renders, so it executed from the top, now userId is different, and then it will wait 200ms. when useEffect comes, it is asynchronous, and it is going to schedule setIsAdmin. so it will wait, not update isAdmin at that point. continues to go to return, and render JSX with updated userId but with old isAdmin value. it is not updated yet because it is asynchronous. then isAdmin gets updated and will cause the 2nd re-render. it will wait  for another 200 ms. and re-prints the screen with updated isAdmin value.