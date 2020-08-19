import React from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chooseCurrentProject } from '../projects/projectsSlice'

const TasksDashboard = () => {
  const match = useRouteMatch()
  const { projectId } = match.params
  const dispatch = useDispatch()

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
        <h2>{project.name}</h2>
        <button className="btn btn-primary">Add task</button>
      </div>
    </div>
  )
}

export default TasksDashboard
