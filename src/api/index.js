const tasksJson = localStorage.getItem('tasks')
let tasks = []
const updateTasksLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

if (!tasksJson) {
  updateTasksLocalStorage()
} else {
  tasks = JSON.parse(tasksJson)
}

const timeout = 200

const api = {
  post: (endpoint, body) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        switch (endpoint) {
          case '/tasks':
            resolve({
              status: 200,
              data: createTask(body),
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
          case '/tasks':
            resolve({
              status: 200,
              data: getAllTasks(),
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

const createTask = body => {
  const newArrayLength = tasks.push({ text: body }) // returns new length
  updateTasksLocalStorage()
  return tasks[newArrayLength - 1]
}

const getAllTasks = () => {
  return tasks
}
