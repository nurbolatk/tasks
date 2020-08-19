import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import classnames from 'classnames'
import api from '../../api'
import { chooseCurrentProject, selectCurrentProject } from './projectsSlice'

const ProjectsList = () => {
  const [projects, setProjects] = useState([])
  const dispatch = useDispatch()
  const currentProject = useSelector(selectCurrentProject)

  const classes = projectId =>
    classnames([
      'menu-nav-list-item',
      {
        'menu-nav-list-item-active': currentProject.id === projectId,
      },
    ])

  const chooseProject = project => {
    dispatch(
      chooseCurrentProject({
        project,
      })
    )
  }

  useEffect(() => {
    api
      .get('/projects')
      .then(res => {
        setProjects(res.data)
      })
      .catch(error => {
        console.log('ProjectsList -> error', error)
      })
  })

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
