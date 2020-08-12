import React from 'react'
import api from './api'

const App = () => {
  const [todo, setTodo] = React.useState('')
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    api.get('/todos').then(res => setTodos(res.data))
  }, [])

  const saveTodo = e => {
    e.preventDefault()
    const apiPromise = api.post('/todos', todo)
    console.log(apiPromise)
    apiPromise
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <h1>hello there</h1>
      <form onSubmit={saveTodo}>
        <input
          type='text'
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <button>Save</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
