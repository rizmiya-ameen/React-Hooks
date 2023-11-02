//useReducer - simple example - only handling one state

import React from 'react'
import { useReducer } from 'react'

const reducer = (state, action) => {
  return { count: state.count + 1}
}

const AddCounter = () => {

  const [ state, dispatch ] = useReducer(reducer, { count: 0})

  const handleIncrement = () => {
    dispatch()
  }

  return (
    <div>
      <hr />
      <h1>{state.count}</h1>
      <button onClick={handleIncrement}>+</button>
    </div>
  )
}

export default AddCounter

/*
dispatch function is
essentially what we call in order to
update our state. essentially it's going
to call this reducer up here for us
given certain parameters. and this
reducer is going to take two different
things it's going to take the current
state and it's also going to take
an action. this action is what we pass
into this dispatch function so whenever
we call dispatch what's going to happen
is whatever we call dispatch with is
going to get set to this action variable
here and then our current state is going
to be in this state variable and a
reducer is just going to return our new
updated state. */