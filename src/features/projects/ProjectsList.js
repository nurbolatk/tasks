import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import api from '../../api'

const ProjectsList = ({ chooseProject }) => {
  const [projects, setProjects] = useState([])

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
          className="menu-nav-list-item"
          key={project.id}
          onClick={chooseProject}>
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
