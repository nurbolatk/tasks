const todosJson = localStorage.getItem('todos')
let todos = []
const updateTodosLocalStorage = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

if (!todosJson) {
  updateTodosLocalStorage()
} else {
  todos = JSON.parse(todosJson)
}

const timeout = 200

const api = {
  post: (endpoint, body) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        switch (endpoint) {
          case '/todos':
            resolve({
              status: 200,
              data: createTodo(body),
            })
            break
          default:
            reject({
              status: 404,
              message: `${endpoint} endpoint does not exist`,
            })
        }
      }, timeout)
    )
  },
  get: endpoint => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (endpoint) {
          case '/todos':
            resolve({
              status: 200,
              data: getAllTodos(),
            })
            break
          default:
            reject({
              status: 404,
              message: `${endpoint} endpoint does not exist`,
            })
        }
      }, timeout)
    })
  },
}

export default api

const createTodo = body => {
  const newArrayLength = todos.push({ text: body }) // returns new length
  updateTodosLocalStorage()
  return todos[newArrayLength - 1]
}

const getAllTodos = () => {
  return todos
}
