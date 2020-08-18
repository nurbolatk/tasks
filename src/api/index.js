const dataJson = localStorage.getItem('data')
let data = {
  tasks: [],
  projects: [],
}
const updateTasksLocalStorage = () => {
  localStorage.setItem('data', JSON.stringify(data))
}

if (!dataJson) {
  updateTasksLocalStorage()
} else {
  data = JSON.parse(dataJson)
}

const timeout = 200

const api = {
  post: (endpoint, body) => {
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        switch (endpoint) {
          case '/tasks':
            return resolve({
              status: 200,
              data: createTask(body),
            })
          case '/projects':
            return resolve({
              status: 200,
              data: createProject(body),
            })
          default:
            return reject({
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

const createTask = task => {
  data.tasks = [...data.tasks, task]
  updateTasksLocalStorage()
  return data.tasks[data.tasks.length - 1]
}

const getAllTasks = () => {
  return data.tasks
}

// Projects
const createProject = project => {
  data.projects = [...data.projects, project]
  updateTasksLocalStorage()
  return data.projects[data.projects.length - 1]
}
