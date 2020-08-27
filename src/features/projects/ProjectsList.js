import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchProjects,
  selectCurrentProject,
  setCurrentProject,
} from './projectsSlice'
import { useHistory } from 'react-router-dom'

const ProjectsList = () => {
  const projects = useSelector(state => state.projects.projects)
  const currentProjectId = useSelector(selectCurrentProject)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  const classes = projectId =>
    classnames([
      'menu-nav-list-item',
      {
        'menu-nav-list-item-active': currentProjectId === projectId,
      },
    ])

  const chooseProject = project => {
    if (currentProjectId !== project.id) {
      dispatch(setCurrentProject({ id: project.id, history }))
      // history.push(`/tasks/${project.id}`)
    }
  }

  return (
    <>
      {projects.map(project => (
        <button
          className={classes(project.id)}
          key={project.id}
          onClick={() => chooseProject(project)}>
          <span
            className="menu-nav-list-item-color"
            style={{ backgroundColor: project.color }}></span>
          <span className="menu-nav-list-item-text">{project.name}</span>
        </button>
      ))}
    </>
  )
}

export default ProjectsList
