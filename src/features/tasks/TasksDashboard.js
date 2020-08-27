import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject, selectCurrentProject } from '../projects/projectsSlice'
import Modal from '../../components/molecules/Modal'
import CreateTask from './CreateTask'
import {
  fetchTasks,
  setCurrentTask,
  selectCurrentTask,
  resetCurrentTask,
} from './tasksSlice'
// import BoardTodo from './BoardTodo'
// import BoardDoing from './BoardDoing'
// import BoardDone from './BoardDone'
import BoardTemplate from './BoardTemplate'
import SettingsIcon from '../../components/icons/SettingsIcon'
import api from '../../api'

const TasksDashboard = () => {
  const match = useRouteMatch()
  const { projectId } = match.params
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const currentTask = useSelector(selectCurrentTask)
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const tasks = useSelector(state =>
    state.tasks.tasks.filter(task => task.project.id === projectId)
  )

  const project = useSelector(state =>
    state.projects.projects.find(project => project.id === projectId)
  )
  console.log('TasksDashboard -> project', project)

  if (!project) {
    return <div>Loading...</div>
  }

  const tasksTodo = []
  const tasksDoing = []
  const tasksDone = []

  tasks.forEach(task => {
    let completedSteps = 0
    task.steps.forEach(step => {
      if (step.completed) {
        completedSteps++
      }
    })

    switch (completedSteps) {
      case 0:
        tasksTodo.push(task)
        break
      case task.steps.length:
        tasksDone.push(task)
        break
      default:
        tasksDoing.push(task)
    }
  })

  const openTaskSideBar = e => {
    const { taskId } = e.target.dataset
    if (!currentTask) {
      dispatch(setCurrentTask(taskId))
    } else {
      if (taskId === currentTask.id) {
        // dispatch an action that sets currentTask to null
        dispatch(resetCurrentTask())
      } else {
        dispatch(setCurrentTask(taskId))
      }
    }
  }

  const onDeleteProjectClicked = async () => {
    try {
      await api.delete('/projects/id', projectId)
      dispatch(deleteProject({ id: projectId, history }))
      // history.replace('/tasks')
    } catch (error) {
      console.error(error.message)
      alert(error.message)
    }
  }

  return (
    <div className="task-dashboard">
      <div className="task-dashboard-header d-flex">
        <h2 className="task-dashboard-header-name">{project.name}</h2>
        <button
          className="btn-icon btn-icon-fill-dark ml-2"
          onClick={onDeleteProjectClicked}>
          <SettingsIcon />
        </button>
        <button onClick={() => setShow(true)} className="btn btn-primary">
          Add task
        </button>
      </div>
      <div className="grid grid-3 my-5 task-dashboard-body ">
        <BoardTemplate
          tasks={tasksTodo}
          title="Todo"
          onTaskTitleClicked={openTaskSideBar}
        />
        <BoardTemplate
          tasks={tasksDoing}
          title="Doing"
          onTaskTitleClicked={openTaskSideBar}
        />
        <BoardTemplate
          tasks={tasksDone}
          title="Done"
          onTaskTitleClicked={openTaskSideBar}
        />
      </div>
      <Modal show={show} setShow={setShow} closeModal={() => setShow(false)}>
        <Modal.Header closeModal={() => setShow(false)}>
          Create a new task
        </Modal.Header>
        <CreateTask />
      </Modal>
    </div>
  )
}

export default TasksDashboard
