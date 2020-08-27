import React from 'react'
import TasksMenu from './TasksMenu'
// import TaskList from './TaskList'
import { useSelector } from 'react-redux'
import { selectCurrentProject } from '../projects/projectsSlice'
import TasksDashboard from './TasksDashboard'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

/* task {
  id
  text
  description
  author
  project
  priority
  deadline
  completed
  archived
}*/

const Tasks = () => {
  const project = useSelector(selectCurrentProject)
  const projects = useSelector(state => state.projects.projects)
  const history = useHistory()

  console.log('Tasks -> project', project)
  useEffect(() => {
    console.log('effect started... ')
    if (projects[0]) {
      console.log('navigating... ', projects[0])
      if (project === null) {
        history.push(`/tasks/${projects[0].id}`)
      } else {
        history.push(`/tasks/${project}`)
      }
    }
  }, [history, project, projects])

  return (
    <>
      <TasksMenu />
      <div className="content">
        <Switch>
          <Route exact component={TasksDashboard} path="/tasks/:projectId" />
        </Switch>
        {/* <TasksDashboard project={project} /> */}
      </div>
    </>
  )
}

export default Tasks
