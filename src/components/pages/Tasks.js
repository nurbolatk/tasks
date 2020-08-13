import React from 'react'
// import Content from '../molecules/Content'
// import Menu from '../organisms/Menu'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

const Tasks = () => {
  const match = useRouteMatch()
  return (
    <>
      <div className='menu'>
        <div className='p-3'>
          <button className='btn btn-primary w-100'>Add task</button>
          <Link to={`${match.url}/create`}>Add task</Link>
          <Link to={match.url}>All tasks</Link>
        </div>
      </div>
      <div className='content'>
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
