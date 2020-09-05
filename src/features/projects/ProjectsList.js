import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from './projectsSlice'
import Menu from '../../components/organisms/Menu'

import history from './../../utils/history'
import { useState } from 'react'

const ProjectsList = () => {
  const projects = useSelector(state => state.projects.projects)
  const [currentProjectId, setCurrentProjectId] = useState(
    history.location.pathname.split('/').slice(-1).pop()
  )
  // const currentProjectId = useSelector(selectCurrentProject)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  useEffect(() => {
    const unlisten = history.listen((location, action) => {
      // location is an object like window.location
      const path = location.pathname.split('/')
      setCurrentProjectId(path[path.length - 1])
    })
    return unlisten
  }, [])

  const chooseProject = project => {
    if (currentProjectId !== project.id) {
      // dispatch(setCurrentProject({ id: project.id, history }))
      history.push(`/tasks/${project.id}`)
    }
  }

  return (
    <>
      {projects.map(project => (
        <Menu.Item
          key={project.id}
          text={project.name}
          active={currentProjectId === project.id}
          colorBox={
            <span
              className="menu-nav-list-item-color"
              style={{ backgroundColor: project.color }}></span>
          }
          onItemClick={() => chooseProject(project)}
        />
      ))}
    </>
  )
}

export default ProjectsList
