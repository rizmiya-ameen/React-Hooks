import React, { useMemo, useState } from 'react'
import { initialItems } from './utils'

const MemoTwo = () => {

  const [ count, setCount ] = useState(0)
  const [ items ] = useState(initialItems)

  const selectedItem = useMemo(
    () => items.find(item => item.isSelected), [items]
  ) 

  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>Selected Item: {selectedItem?.id}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <hr />
    </div>
  )
}

export default MemoTwo