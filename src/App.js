import React from 'react'
import './sass/main.scss'
import Topbar from './components/organisms/Topbar'
import Sidebar from './components/organisms/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/pages/Books'
import Tasks from './features/tasks/Tasks'
import Projects from './features/projects/Projects'

const App = () => {
  return (
    <Router>
      <div className="app">
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
      </div>
    </Router>
  )
}

export default App
