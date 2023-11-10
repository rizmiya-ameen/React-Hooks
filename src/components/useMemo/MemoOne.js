import React, { useState } from 'react'
import { initialItems } from './utils'

const MemoOne = () => {

  const [ count, setCount ] = useState(0)
  const [ items ] = useState(initialItems)

  const selectedItem = items.find(item => item.isSelected) 

  return (
    <div>
      <h3>Count: {count}</h3>
      <h3>Selected Item: {selectedItem?.id}</h3>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <hr />
    </div>
  )
}

export default MemoOne


//app lags, because of this slowest calculation

  // in react to update something / to update State - you have to trigger a re-render of the entire component. and this is very important

  
  //there's no performance issues with count 
  
  //items uses this initial items, but because we gave it to State this will only ever be called once and that is on initial render when this state is initialized and then this initial items will not run again and again so there's no performance there 
  
  //but if we look here at the selected item this is where we have the performance issues. because it takes the items and then it goes into the array of items to find the item that is isSelected. it is a very expensive operation because it has to go through 29 million items to find the one that is selected that is how find works it goes through all of the array until it finds one item and then once it found the item, it will then return the item.

  //when we're changing the count we are causing this component to re-render so we're causing the selected item to be recalculated every time the count changes. and app lags



  //when do we actually need to run this useMemo? when do we actually need to compute this?   
  //maybe we don't have to compute this every time, maybe we can only  set a certain point at which this is computed, and only do it then. 
  
  //so the first time that we're going to compute this is the first time that this component renders. 
  //if items is the same then this will be the same and the selected item will be the same one so there's no need to recompute this again unless items is different. that is the only condition. we only need to run this once and then if items is the same in the next render we can just return the previous value. it's more efficient this way there's no need to recompute it. but then when items is different then we need to recompute this and return a new value and that is what use memo is used for. use memo is a hook that memorizes a value and Returns the same value until any of the dependencies and the dependency array changes until then it will recompute a new value.