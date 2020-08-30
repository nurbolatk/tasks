import React from 'react'
import TasksMenu from './TasksMenu'
import { useSelector } from 'react-redux'
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
  const projects = useSelector(state => state.projects.projects)

  return (
    <>
      <TasksMenu />
      <div className="content">
        {!projects.length && <p>Please create new project</p>}
        <Switch>
          <Route exact component={TasksDashboard} path="/tasks/:projectId" />
        </Switch>
      </div>
    </>
  )
}

export default Tasks
