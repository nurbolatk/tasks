import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCurrentProject } from '../projects/projectsSlice'
import Modal from '../../components/molecules/Modal'
import CreateTask from './CreateTask'

const TasksDashboard = () => {
  const match = useRouteMatch()
  const { projectId } = match.params
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  useEffect(() => {
    dispatch(chooseCurrentProject(projectId))
    console.log('projectId', projectId)
  }, [projectId, dispatch])

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
