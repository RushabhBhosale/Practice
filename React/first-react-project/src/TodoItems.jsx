import React from 'react'
import TodoItem from './components/TodoItem'

const TodoItems = ({ bola }) => {
   return (
      <>
         {bola.map((todo) => (
            <TodoItem key={todo.name} todoDate={todo.date} todoName={todo.name} />
         ))}
      </>
   )
}

export default TodoItems