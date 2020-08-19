import React from 'react'
import TasksMenu from './TasksMenu'
// import TaskList from './TaskList'
// import { useSelector } from 'react-redux'
// import { selectCurrentProject } from '../projects/projectsSlice'
import TasksDashboard from './TasksDashboard'
import { Switch, Route } from 'react-router-dom'

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
  // const project = useSelector(selectCurrentProject)

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
