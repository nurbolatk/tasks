import React from 'react'
// import Content from '../molecules/Content'
// import Menu from '../organisms/Menu'
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

const Tasks = () => {
  const match = useRouteMatch()
  const history = useHistory()

  return (
    <>
      <div className="menu">
        <div className="p-4">
          <button
            onClick={() => {
              history.push(`${match.url}/create`)
            }}
            className="btn btn-primary w-100">
            Add task
          </button>
        </div>
        <Link to={match.url}>All tasks</Link>
      </div>
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
