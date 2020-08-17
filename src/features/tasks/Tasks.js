import React from 'react'
// import Content from '../molecules/Content'
// import Menu from '../organisms/Menu'
import { Switch, Route, useRouteMatch, useHistory } from 'react-router-dom'
import CreateTask from './CreateTask'
import TaskList from './TaskList'

const Tasks = () => {
  const match = useRouteMatch()
  const history = useHistory()
  const goToTaskList = () => {
    history.push('/tasks')
  }
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
        <nav className="menu-nav">
          <h4 className="menu-nav-header p-4">Layout</h4>
          <div className="menu-nav-list">
            <button
              className="menu-nav-list-item menu-nav-list-item-active"
              onClick={goToTaskList}>
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-list-ul menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              <span className="menu-nav-list-item-text">List view</span>
            </button>
            <button className="menu-nav-list-item">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-grid-3x2-gap-fill menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M1 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V4zM1 9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V9z" />
              </svg>
              <span className="menu-nav-list-item-text">Grid view</span>
            </button>
          </div>
        </nav>
        <hr />
        <nav className="menu-nav">
          <h4 className="menu-nav-header p-4">General</h4>
          <div className="menu-nav-list">
            <button className="menu-nav-list-item ">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-plus-circle menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"
                />
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
              </svg>
              <span className="menu-nav-list-item-text">Active</span>
              <span className="menu-nav-list-item-badge">8</span>
            </button>
            <button className="menu-nav-list-item">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-x-circle menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  fill-rule="evenodd"
                  d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"
                />
              </svg>
              <span className="menu-nav-list-item-text">Completed</span>
              <span className="menu-nav-list-item-badge">5</span>
            </button>
          </div>
        </nav>
        <hr />
        <nav className="menu-nav">
          <h4 className="menu-nav-header p-4">Advanced</h4>
          <div className="menu-nav-list">
            <button className="menu-nav-list-item">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-calendar-check menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1zm1-3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z"
                />
                <path
                  fill-rule="evenodd"
                  d="M3.5 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5zm9 0a.5.5 0 0 1 .5.5V1a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 .5-.5z"
                />
              </svg>
              <span className="menu-nav-list-item-text">Due Date</span>
            </button>
            <button className="menu-nav-list-item">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-briefcase menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6h-1v6a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-6H0v6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5v2.384l-7.614 2.03a1.5 1.5 0 0 1-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 0 0-.5.5v1.616l6.871 1.832a.5.5 0 0 0 .258 0L15 6.116V4.5a.5.5 0 0 0-.5-.5h-13zM5 2.5A1.5 1.5 0 0 1 6.5 1h3A1.5 1.5 0 0 1 11 2.5V3h-1v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V3H5v-.5z"
                />
              </svg>
              <span className="menu-nav-list-item-text">Per Project</span>
            </button>
            <button className="menu-nav-list-item">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                class="bi bi-pen menu-nav-list-item-icon"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  d="M5.707 13.707a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391L10.086 2.5a2 2 0 0 1 2.828 0l.586.586a2 2 0 0 1 0 2.828l-7.793 7.793zM3 11l7.793-7.793a1 1 0 0 1 1.414 0l.586.586a1 1 0 0 1 0 1.414L5 13l-3 1 1-3z"
                />
                <path
                  fill-rule="evenodd"
                  d="M9.854 2.56a.5.5 0 0 0-.708 0L5.854 5.855a.5.5 0 0 1-.708-.708L8.44 1.854a1.5 1.5 0 0 1 2.122 0l.293.292a.5.5 0 0 1-.707.708l-.293-.293z"
                />
                <path d="M13.293 1.207a1 1 0 0 1 1.414 0l.03.03a1 1 0 0 1 .03 1.383L13.5 4 12 2.5l1.293-1.293z" />
              </svg>
              <span className="menu-nav-list-item-text">Assigned by</span>
            </button>
          </div>
        </nav>
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
