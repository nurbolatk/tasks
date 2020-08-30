import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects, selectCurrentProject } from './projectsSlice'
import { useHistory } from 'react-router-dom'
import Menu from '../../components/organisms/Menu'

const ProjectsList = () => {
  const projects = useSelector(state => state.projects.projects)
  const currentProjectId = useSelector(selectCurrentProject)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

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
