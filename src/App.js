import React from 'react'
import api from './api'
import './sass/main.scss'

const App = () => {
  const [todo, setTodo] = React.useState('')
  const [todos, setTodos] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await api.get('/todos')
        setIsLoading(false)
        setTodos(res.data)
      } catch (err) {
        setIsLoading(false)
        alert(err.message)
      }
    }
    getTodos()
  }, [])

  const saveTodo = e => {
    e.preventDefault()
    const apiPromise = api.post('/todos', todo)

    apiPromise
      .then(data => {
        console.log(data)
        // setTodo('')
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
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          todos.map(todo => <li key={todo.text}>{todo.text}</li>)
        )}
      </ul>
    </div>
  )
}

export default App
