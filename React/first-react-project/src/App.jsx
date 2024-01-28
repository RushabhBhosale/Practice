import TodoItems from "./TodoItems"
import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"

function App() {

  const todoItems = [
    {
      name: "Buy Milk",
      date: "4/12/29"
    },
    {
      name: "Buy Groceries",
      date: "5/12/29"
    },
    {
      name: "Buy Cake",
      date: "12/12/31"
    }
  ]

  return (
   <center className="todo-container">
    <AppName />
    <AddTodo />
    <TodoItems bola={todoItems} />
    
   </center>
  )
}

export default App
