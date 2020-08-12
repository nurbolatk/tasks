const timeout = 2000

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
  return 'New todo!'
}

const getAllTodos = () => {
  return [
    {
      text: 'Create fake api',
    },
  ]
}
