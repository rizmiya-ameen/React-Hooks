import React from 'react'
import { useReducer } from 'react'

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT : 
    return {count: state.count + 1}

    case ACTIONS.DECREMENT :
      return { count: state.count - 1}

    default : 
    return state
  }
}

const FullCounter = () => {

  const [ state, dispatch ] = useReducer(reducer, { count: 0});

  const handleIncrement = () => {
    dispatch({ type: ACTIONS.INCREMENT})
  }

  const handleDecrement = () => {
    dispatch({ type: ACTIONS.DECREMENT})
  }

  return (
    <div>
      <hr />
      <h4>useReducer</h4>
      <button onClick={handleIncrement}>+</button>
      <h1>{state.count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default FullCounter


/*

import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment' : 
    return {count: state.count + 1}

    case 'decrement' :
      return { count: state.count - 1}

    default : 
    return state
  }
}

const FullCounter = () => {

  const [ state, dispatch ] = useReducer(reducer, { count: 0});

  const handleIncrement = () => {
    dispatch({ type: 'increment'})
  }

  const handleDecrement = () => {
    dispatch({ type: 'decrement'})
  }

  return (
    <div>
      <hr />
      <button onClick={handleIncrement}>+</button>
      <h1>{state.count}</h1>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default FullCounter
*/