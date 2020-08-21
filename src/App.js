import React from 'react'
import './sass/main.scss'
import Topbar from './components/organisms/Topbar'
import Sidebar from './components/organisms/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/pages/Books'
import Tasks from './features/tasks/Tasks'
import Projects from './features/projects/Projects'
import TaskFull from './features/tasks/TaskFull'

const App = () => {
  return (
    <Router>
      <div className="app app-right-sidebar-open">
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

        <TaskFull />
      </div>
    </Router>
  )
}

export default App
