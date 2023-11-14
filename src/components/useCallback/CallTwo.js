import React, { useCallback, useState } from 'react'
import Search from './Search';

const allUsers = [
  'rizmiya',
  'person1',
  'person2',
  'person3',
  'person4',
]
const CallTwo = () => {

  const [users, setUsers] = useState(allUsers);

  const handleSearch = useCallback((text) => {
    const filteredUsers = allUsers.filter(user => 
      user.includes(text)
    )
    setUsers(filteredUsers)
  }, [])
  //now this function is memorized

  const handleShuffle = () => {
    const shuffledUsers = [...users].sort(() => Math.random() - 0.5);
    setUsers(shuffledUsers);
  };

  return (
    <div>
      <h4>useCallback</h4>
      <button onClick={handleShuffle}>Shuffle</button>

      <Search handleSearch={handleSearch}/>
      {users.map((user, index) => (
        <p key={index}>{user}</p>
      ))}
      <hr />
    </div>
  )
}

export default CallTwo