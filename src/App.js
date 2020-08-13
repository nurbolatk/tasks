import React from 'react'
import './sass/main.scss'
import Topbar from './components/organisms/Topbar'
import Sidebar from './components/organisms/Sidebar'
// import Content from './components/molecules/Content'
// import Menu from './components/organisms/Menu'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Books from './components/pages/Books'
import Tasks from './components/pages/Tasks'

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
        </Switch>
        {/* <Menu />
        <Content /> */}
      </div>
    </Router>
  )
}

export default App
