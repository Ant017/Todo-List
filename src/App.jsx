import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import { useEffect, useState } from "react"

export default function App() {
  
  /* Changes need to be made into useState too.
  To get our info from localStorage */
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue ===  null) return []

    return JSON.parse(localValue)
  })

  /* after refreshing, the todos persist.
  So we need to store them somehow.
  Here comes a new hook - useEffect.
  Whenever a todo changes, it updates the value to the local storage */
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
          return [
            ...currentTodos,
             { id: crypto.randomUUID(), title, completed: false},
            ]
        })
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo} />
    </>
  )
}