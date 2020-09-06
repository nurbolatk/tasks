import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProject } from '../projects/projectsSlice'
import Modal from '../../components/molecules/Modal'
import CreateTask from './CreateTask'
import {
  fetchTasks,
  setCurrentTask,
  selectCurrentTask,
  resetCurrentTask,
} from './tasksSlice'
import BoardTemplate from './BoardTemplate'
import api from '../../api'
import ProjectSettingsDropdown from './ProjectSettingsDropdown'

const TasksDashboard = () => {
  const match = useRouteMatch()
  const { projectId } = match.params
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const currentTask = useSelector(selectCurrentTask)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const tasks = useSelector(state =>
    state.tasks.tasks.filter(task => task.project.id === projectId)
  )

  const project = useSelector(state =>
    state.projects.projects.find(project => project.id === projectId)
  )

  if (!project) {
    return <div>Loading...</div>
  }

  const tasksTodo = []
  const tasksDoing = []
  const tasksDone = []

  tasks.forEach(task => {
    if (task.steps.length) {
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
    } else {
      if (task.completed) tasksDone.push(task)
      else tasksTodo.push(task)
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
      dispatch(deleteProject({ id: projectId }))
    } catch (error) {
      console.error(error.message)
      alert(error.message)
    }
  }

  return (
    <div className="task-dashboard">
      <div className="task-dashboard-header d-flex">
        <h2 className="task-dashboard-header-name">{project.name}</h2>
        <ProjectSettingsDropdown
          onDeleteProjectClicked={onDeleteProjectClicked}
        />
        <button onClick={() => setShow(true)} className="btn btn-primary">
          Add task
        </button>
      </div>
      <div className="grid grid-3 my-5 task-dashboard-body ">
        <BoardTemplate
          tasks={tasksTodo}
          title="To do"
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
      <Modal show={show} setShow={setShow} title="Create a new task">
        <CreateTask projectId={projectId} />
      </Modal>
    </div>
  )
}

export default TasksDashboard
