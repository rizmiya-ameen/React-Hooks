import React, { useState } from 'react'
import Search from './Search';

const allUsers = [
  'rizmiya',
  'person1',
  'person2',
  'person3',
  'person4',
]
const CallOne = () => {

  const [users, setUsers] = useState(allUsers);

  const handleSearch = (text) => {
    const filteredUsers = allUsers.filter(user => 
      user.includes(text)
    )
    setUsers(filteredUsers)
  }

  const handleShuffle = () => {
    // Create a shuffled copy of the array using the Fisher-Yates algorithm
    const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffledUsers);
  };

  return (
    <div>
      <button onClick={handleShuffle}>Shuffle</button>

      <Search handleSearch={handleSearch}/>
      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
      <hr />
    </div>
  )
}

export default CallOne


/*

Math.random(): This method returns a pseudo-random floating-point number in the range from 0 (inclusive) to 1 (exclusive). In other words, it generates a random number between 0 and 1.

Math.random() - 0.5: By subtracting 0.5 from the result of Math.random(), we get a random number in the range from -0.5 to 0.5. This is crucial for creating a random sorting effect.

Now, let's consider how the sort() method uses this comparator function:

If the comparator function returns a negative number, sort() considers the first element as smaller, and it will be placed before the second element.

If the comparator function returns a positive number, sort() considers the first element as larger, and it will be placed after the second element.

If the comparator function returns 0, the order of the elements remains unchanged.

With Math.random() - 0.5, the comparator function generates a random number for each pair of elements being compared. Since the random number is in the range from -0.5 to 0.5, it causes the sorting to be effectively random. The result is that the array gets shuffled into a different order each time the sort() method is called with this comparator function.
*/