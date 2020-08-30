import { nanoid } from '@reduxjs/toolkit'

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

const timeout = 1

const api = {
  post: (endpoint, body) => {
    console.log(`%cNew post request ${endpoint}`, 'color:blue', body)
    return new Promise((resolve, reject) =>
      setTimeout(() => {
        switch (endpoint) {
          case '/tasks':
            return resolve({
              status: 200,
              data: createTask(body),
            })
          case '/tasks/:id/steps':
            const res = createStep(body)
            if (!res)
              return reject({
                error: 404,
                message: 'There is no such task',
              })
            return resolve({
              status: 200,
              data: res,
            })
          case '/updateTaskState/:id':
            const idOfTaskWithUpdatedStatus = updateTaskState(body)
            if (idOfTaskWithUpdatedStatus) {
              return resolve({
                status: 200,
              })
            }
            return reject({
              status: 404,
              message: 'There is no task with such id',
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
    console.log(`%cNew get request ${endpoint}`, 'color:blue')
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (endpoint) {
          case '/tasks':
            return resolve({
              status: 200,
              data: getAllTasks(),
            })
          case '/projects':
            return resolve({
              status: 200,
              data: getAllProjects(),
            })
          default:
            return reject({
              status: 404,
              message: `${endpoint} endpoint does not exist`,
            })
        }
      }, timeout)
    })
  },
  put: (endpoint, body) => {
    console.log(`%cNew put request ${endpoint}`, 'color:blue', body)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (endpoint) {
          case '/tasks/id/steps/id':
            const res = updateStep(body)
            if (res.taskExists && res.stepExists) {
              return resolve({
                status: 200,
                data: res,
              })
            } else {
              return reject({
                status: 404,
                message: `There is no such step and/or task in database`,
              })
            }
          default:
            return reject({
              status: 404,
              message: `${endpoint} endpoint does not exist`,
            })
        }
      }, timeout)
    })
  },
  delete: (endpoint, body) => {
    console.log(`%cNew delete request ${endpoint}`, 'color:blue', body)
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        switch (endpoint) {
          case '/tasks/id':
            return resolve({
              status: 200,
              data: deleteTask(body),
            })
          case '/projects/id':
            return resolve({
              status: 200,
              data: deleteProject(body),
            })
          default:
            return reject({
              status: 404,
              message: `${endpoint} endpoint does not exist`,
            })
        }
      }, timeout)
    })
  },
}

export default api

// Tasks
const getAllTasks = () => {
  return data.tasks
}
const createTask = task => {
  data.tasks = [...data.tasks, { ...task, completed: false, steps: [] }]
  updateTasksLocalStorage()
  return data.tasks[data.tasks.length - 1]
}
const deleteTask = id => {
  data.tasks = data.tasks.filter(task => task.id !== id)
  updateTasksLocalStorage()
  return id
}
const createStep = ({ text, id }) => {
  const found = data.tasks.find(task => task.id === id)
  if (!found) return false
  const newStep = {
    id: nanoid(),
    text,
    completed: false,
  }
  data.tasks = data.tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        steps: [...task.steps, newStep],
      }
    }
    return task
  })
  updateTasksLocalStorage()
  return newStep
}

const updateStep = ({ taskId, updatedStep }) => {
  let taskExists = false
  let stepExists = false
  data.tasks = data.tasks.map(task => {
    if (task.id === taskId) {
      taskExists = true
      return {
        ...task,
        steps: task.steps.map(step => {
          if (step.id === updatedStep.id) {
            stepExists = true
            return updatedStep
          }
          return step
        }),
      }
    }
    return task
  })
  if (taskExists && stepExists) {
    updateTasksLocalStorage()
  }
  return {
    taskExists,
    stepExists,
  }
}
const updateTaskState = id => {
  const found = data.tasks.find(task => task.id === id)
  if (!found) return false
  data.tasks = data.tasks.map(task => {
    if (task.id === id) {
      return {
        ...task,
        completed: !task.completed,
      }
    }
    return task
  })
  updateTasksLocalStorage()
  return true
}

// Projects
const createProject = project => {
  data.projects = [...data.projects, project]
  updateTasksLocalStorage()
  return data.projects[data.projects.length - 1]
}
const getAllProjects = () => {
  return data.projects
}
const deleteProject = id => {
  data.projects = data.projects.filter(project => project.id !== id)
  updateTasksLocalStorage()
  return id
}
