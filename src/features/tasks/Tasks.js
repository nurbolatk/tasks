import React from 'react'
// import Content from '../molecules/Content'
// import Menu from '../organisms/Menu'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import CreateTask from './CreateTask'
import TaskList from './TaskList'
import TasksMenu from './TasksMenu'

const Tasks = () => {
  const match = useRouteMatch()

  return (
    <>
      <TasksMenu match={match} />
      <div className="content">
        <Switch>
          <Route path={`${match.path}/create`}>
            <CreateTask />
          </Route>
          <Route path={match.path}>
            <TaskList />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default Tasks
