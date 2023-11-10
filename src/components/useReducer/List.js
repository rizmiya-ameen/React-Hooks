import React from 'react'
import { ACTIONS } from './ToDo'

const List = ({todo, dispatch}) => {

  const handleDelete = () => {
    dispatch({ type: ACTIONS.DELETE_TODO, payload: {
      id: todo.id
    }})
  }

  const handleToggle = () => {
    dispatch({type: ACTIONS.TOGGLE, payload: {
      id: todo.id
    }})
  }

  return (
    <div>
      <h3 style={{ color: todo.complete ? "#AAA" : "#000"}}>{todo.name}</h3>
      <button onClick={handleToggle}>Toggle</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default List