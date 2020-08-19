import React, { useEffect } from 'react'
// import { useDispatch } from 'react-redux'
import classnames from 'classnames'
import { useHistory, matchPath } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects, selectCurrentProject } from './projectsSlice'

const ProjectsList = () => {
  // const dispatch = useDispatch()
  const history = useHistory()
  const projects = useSelector(state => state.projects.projects)
  const currentProjectId = useSelector(selectCurrentProject)
  console.log('ProjectsList -> currentProjectId', currentProjectId)

  const classes = projectId =>
    classnames([
      'menu-nav-list-item',
      {
        'menu-nav-list-item-active': currentProjectId === projectId,
      },
    ])

  const chooseProject = project => {
    // dispatch(
    //   chooseCurrentProject({
    //     project,
    //   })
    // )
    if (currentProjectId !== project.id) {
      history.push(`/tasks/${project.id}`)
    }
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

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
