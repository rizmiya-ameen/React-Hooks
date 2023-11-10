import React, { useReducer, useState } from 'react'
import List from './List'

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  DELETE_TODO: 'delete-todo',
  TOGGLE: 'toggle-todo'
}

const reducer = (todos, action) => {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]

    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)

    case ACTIONS.TOGGLE:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        }
        return todo
      })

    default: 
    return todos
  }
}

const newTodo = (name) => {
  return { id: Date.now(), name: name, complete: false}
}

const ToDo = () => {

 const [ todos, dispatch ] = useReducer(reducer, [])

  const [ name, setName ] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: {name: name, }});
    setName("")
  }

  //console.log(todos)

  return (
    <div>
      <hr />
      <h4>useReducer</h4>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </form>

      {todos.map(todo => {
        return <List key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </div>
  )
}

export default ToDo