import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCurrentProject } from '../projects/projectsSlice'
import Modal from '../../components/molecules/Modal'
import CreateTask from './CreateTask'
import { fetchTasks } from './tasksSlice'

const TasksDashboard = () => {
  const match = useRouteMatch()
  const { projectId } = match.params
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(chooseCurrentProject(projectId))
    console.log('projectId', projectId)
  }, [projectId, dispatch])

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  const tasks = useSelector(state => state.tasks.tasks)

  const project = useSelector(state =>
    state.projects.projects.find(project => project.id === projectId)
  )
  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div className="task-dashboard">
      <div className="task-dashboard-header">
        <h2 className="task-dashboard-header-name">{project.name}</h2>
        <button onClick={() => setShow(true)} className="btn btn-primary">
          Add task
        </button>
      </div>
      <div className="grid grid-3 my-5 task-dashboard-body ">
        <div className="card task-dashboard-board task-dashboard-board-todo">
          <h3 className="card-title m-0">Todo</h3>
          <div className="task-list">
            {tasks.map(task => (
              <div className="task py-5">
                <h4 className="task-text mb-1">{task.text}</h4>
                <p className="task-description text-secondary mb-3 ">
                  {task.description}
                </p>
                <div className="task-footer">
                  <div className="gx-1  task-progress">
                    <p className="task-progress-label text-tertiary">
                      Progress
                    </p>
                    <progress
                      className="task-progress-bar"
                      max="100"
                      value="70"></progress>
                    <span className="task-progress-value">0%</span>
                  </div>
                  <div className="task-priority">
                    <p className="text-tertiary mb-1">Priority:</p>
                    <div className="d-flex align-center">
                      <span className="task-priority-color-box task-priority-color-box-high"></span>
                      <span>{task.priority}</span>
                    </div>
                  </div>
                  <div className=" task-deadline">
                    <p className="text-tertiary mb-1">Due:</p>
                    <span>Today</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card task-board task-board-doing">
          <h3 className="card-title m-0">Doing</h3>
          <div className="task-list">
            {tasks.map(task => (
              <div className="task">
                <h4 className="task-text">{task.text}</h4>
                <p className="task-description">{task.description}</p>
                <div className="task-progress">
                  <progress
                    className="task-progress-bar"
                    max="100"
                    value="70"></progress>
                  <span className="task-progress-value">0%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card task-board task-board-done">
          <h3 className="card-title m-0">Done</h3>
          <div className="task-list">
            {tasks.map(task => (
              <div className="task">
                <h4 className="task-text">{task.text}</h4>
                <p className="task-description">{task.description}</p>
                <div className="task-progress">
                  <progress
                    className="task-progress-bar"
                    max="100"
                    value="70"></progress>
                  <span className="task-progress-value">0%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
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
