import React from 'react'
import classnames from 'classnames'
import './sass/main.scss'
import Topbar from './components/organisms/Topbar'
import Sidebar from './components/organisms/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/pages/Books'
import Tasks from './features/tasks/Tasks'
import Projects from './features/projects/Projects'
import TaskFull from './features/tasks/TaskFull'
import { useSelector } from 'react-redux'
import { selectCurrentTask } from './features/tasks/tasksSlice'

const App = () => {
  const currentTask = useSelector(selectCurrentTask)
  return (
    <Router>
      <div
        className={classnames('app', {
          'app-right-sidebar-open': currentTask,
        })}>
        <Topbar />
        <Sidebar />
        <Switch>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/tasks">
            <Tasks />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>

        {currentTask && <TaskFull />}
      </div>
    </Router>
  )
}

export default App
